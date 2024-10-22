from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def registration(request):
    return render(request, 'main/registration.html')

def about(reques):
    return HttpResponse("<h4>Info</h4>")