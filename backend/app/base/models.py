from django.db import models

# Create your models here.


from django.db import models


class User(models.Model):
    name = models.CharField(max_length=200, default="")
    email = models.CharField(max_length=200, default="", unique=True)
    hash = models.CharField(max_length=200, default="")


class HtmlData():
    subject = ""
    title = ""
    idea1 = ""
    idea2 = ""
    idea3 = ""
    quote1 = ""
    quote2 = ""
    question = ""

    def __str__(self):
        return (
            f"Title: {self.title}\n"
            f"Idea 1: {self.idea1}\n"
            f"Idea 2: {self.idea2}\n"
            f"Idea 3: {self.idea3}\n"
            f"Quote 1: {self.quote1}\n"
            f"Quote 2: {self.quote2}\n"
            f"Question: {self.question}\n"
        )

    def __init__(self, request):
        data = request.data
        self.subject = data["subject"]
        self.title = data["title"]
        self.idea1 = data["idea1"]
        self.idea2 = data["idea2"]
        self.idea3 = data["idea3"]
        self.quote1 = data["quote1"]
        self.quote2 = data["quote2"]
        self.question = data["question1"]

    def isEmpty(self):
        attributes = [attr for attr in dir(self) if not callable(
            getattr(self, attr)) and not attr.startswith("__")]
        empty_attrs = [attr for attr in attributes if not getattr(self, attr)]
        return len(empty_attrs) > 0
