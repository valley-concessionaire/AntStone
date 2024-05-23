from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import ObraViewSet, TareaDeObraViewSet, AvanceDeTareaViewSet
from antstone_api import api_views

router = DefaultRouter()
router.register(r'obras', ObraViewSet, basename='obra')
router.register(r'tareas', TareaDeObraViewSet, basename='tarea')
router.register(r'avances', AvanceDeTareaViewSet, basename='avance')

urlpatterns = [
    path('', include(router.urls)),
    path('first_api_view/', api_views.first_api_view)
]