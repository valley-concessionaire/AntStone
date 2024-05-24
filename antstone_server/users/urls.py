from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    CapatazViewSet, DirectorDeObraViewSet, GerenteViewSet,
    PeonViewSet, AyudanteDeAlbanilViewSet
)
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

router = DefaultRouter()
router.register(r'capataz', CapatazViewSet, basename='capataz')
router.register(r'director-de-obra', DirectorDeObraViewSet, basename='director-de-obra')
router.register(r'gerente', GerenteViewSet, basename='gerente')
router.register(r'peon', PeonViewSet, basename='peon')
router.register(r'ayudante-de-albanil', AyudanteDeAlbanilViewSet, basename='ayudante-de-albanil')

urlpatterns = [
    path('', include(router.urls)),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh')
]