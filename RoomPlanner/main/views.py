from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def registration(request):
    return render(request, 'main/registration.html')

def main(request):
    return render(request, 'main/main.html')