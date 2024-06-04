from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework.documentation import include_docs_urls
from users.views import CustomTokenObtainPairView
from .viewsets import (
    CapatazViewSet, DirectorDeObraViewSet, GerenteViewSet,
    PeonViewSet, AyudanteDeAlbanilViewSet
)
from rest_framework_simplejwt.views import TokenRefreshView

router = DefaultRouter()
router.register(r'capataz', CapatazViewSet, basename='capataz')
router.register(r'director-de-obra', DirectorDeObraViewSet, basename='director-de-obra')
router.register(r'gerente', GerenteViewSet, basename='gerente')
router.register(r'peon', PeonViewSet, basename='peon')
router.register(r'ayudante-de-albanil', AyudanteDeAlbanilViewSet, basename='ayudante-de-albanil')

urlpatterns = [
    path('', include(router.urls)),
    path('authenticate', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('docs/', include_docs_urls(title='Users API')),
]
