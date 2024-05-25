from django.conf.urls import include

"""
URL configuration for antstone_server_project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from .urls_swagger import urlpatterns as swagger_urls

urlpatterns = [
    path('api/users/', include('users.urls')),  # Include the API endpoints from the users app
    path('api/', include('antstone_api.urls')),  # Include the API endpoints from the antstone_api app
    path('admin/', admin.site.urls),
]

urlpatterns += swagger_urls
