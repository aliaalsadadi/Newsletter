import errno
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .formatHtml import ThanksSoup, formathtml
from .serializers import UserSerializer
from base.models import User, HtmlData
from .send_message import gmail_send_message
import re
import uuid


@api_view(['POST'])
def subscribe(request):
    data = request.data
    name = data.get("name")
    email = data.get("email")
    if email is None or not re.match(r"[^@]+@[^@]+\.[^@]+", email):
        return Response(status=400)
    data["hash"] = str(uuid.uuid4())
    serialzer = UserSerializer(data=data)
    if serialzer.is_valid():
        print("saved")
        serialzer.save()
    soup = ThanksSoup()
    gmail_send_message(
        subject="Thanks for reading Capitalist Mindset", soup=soup, toEmail=email, userHash=data["hash"])
    return Response(data)


@api_view(['GET', 'POST'])
def unsubcribe(request, userHash):
    if request.method == 'GET':
        return render(request, "unsubscribe.html")
    else:
        try:
            user = User.objects.get(hash=userHash)
            user.delete()
            return render(request, "success.html")
        except User.DoesNotExist:
            print("user doesn not exits")
            return render(request, "fail.html", status=403)


@api_view(['POST'])
def sendMails(request):
    print(request.data)
    users = User.objects.all()
    data = HtmlData(request)
    if data.isEmpty():
        return Response(status=403)
    soup = formathtml(data)
    for user in users:

        try:
            gmail_send_message(data.subject, user.email, user.hash, soup=soup)
            return Response(data="successfully sent mails", status=200)
        except Exception as error:
            print(error)
            return Response(status=500)
