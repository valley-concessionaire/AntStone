from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework.documentation import include_docs_urls
from .viewsets import ObraViewSet, TareaDeObraViewSet, AvanceDeTareaViewSet, ImagenAvanceViewSet
from antstone_api import api_views

router = DefaultRouter()
router.register(r'obras', ObraViewSet, basename='obra')
router.register(r'tareas', TareaDeObraViewSet, basename='tarea')
router.register(r'avances', AvanceDeTareaViewSet, basename='avance')
router.register(r'imagenavances', ImagenAvanceViewSet, basename='imagen_avance')

urlpatterns = [
    path('', include(router.urls)),
    path('first_api_view/', api_views.first_api_view),
    path('docs/', include_docs_urls(title='Antstone API')),
]
