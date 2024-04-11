from . import api_views
from django.urls import path
    
urlpatterns = [path('first_api_view/',
    api_views.first_api_view)
]
