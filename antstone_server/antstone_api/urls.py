from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework.documentation import include_docs_urls
from .viewsets import ObraViewSet, TareaDeObraViewSet, AvanceDeTareaViewSet, ImagenAvanceViewSet
from antstone_api import api_views
from .views import CountObrasView, CountTareasView

router = DefaultRouter()
router.register(r'obras', ObraViewSet, basename='obra')
router.register(r'tareas', TareaDeObraViewSet, basename='tarea')
router.register(r'avances', AvanceDeTareaViewSet, basename='avance')
router.register(r'imagenavances', ImagenAvanceViewSet, basename='imagen_avance')

obras_router = DefaultRouter()
obras_router.register(r'tareas', TareaDeObraViewSet, basename='obra-tareas')

urlpatterns = [
    path('', include(router.urls)),
    path('obras/<int:obra_pk>/', include(obras_router.urls)),
    path('count-obras/', CountObrasView.as_view(), name='count_obras'),
    path('count-tareas/', CountTareasView.as_view(), name='count_tareas'),
    path('first_api_view/', api_views.first_api_view),
    path('docs/', include_docs_urls(title='Antstone API')),
]
