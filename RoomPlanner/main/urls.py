from django.urls import path
from . import views
from django.contrib.auth import views as auth_views
from .views import register_view
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.home, name = 'home'),
    path('login/', auth_views.LoginView.as_view(template_name='main/login1.html'), name='login'),
    path('main', views.main, name = 'main'),
    path('register', register_view, name = 'register'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('playground/', views.playground, name='playground'),

]
 
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)  