from django.urls import path
from . import views

urlpatterns = [
    path('', views.registration),
    path('about', views.about)
]
 