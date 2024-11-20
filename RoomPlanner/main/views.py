from django.shortcuts import render
from django.shortcuts import render, redirect
from .forms import RegisterForm
from django.contrib.auth import login as auth_login

def register_view(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            user = form.save()
            auth_login(request, user)  # Используем переименованный вызов
            form = RegisterForm()
    else:
        form = RegisterForm()
    return render(request, 'main/register.html', {'form': form})



# Create your views here.
def login(request):
    return render(request, 'main/login1.html')

def home(request):
    return render(request, 'main/home.html')


def register(request):
    return render(request, 'main/register.html')
    
def main(request):
    return render(request, 'main/main.html')
    
