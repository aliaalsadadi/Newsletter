from django.urls import path
from . import views

urlpatterns = [
    path('subscribe/', views.subscribe),
    path('unsubscribe/<str:userHash>/', views.unsubcribe),
    path('sendMails/', views.sendMails),
]
