from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from django.urls import path, re_path

schema_view = get_schema_view(
      openapi.Info(
          title="Construction company API",
          default_version='v0.1',
          description="API documentation for Construction company API project for DSI",
          terms_of_service="https://github.com/valley-concessionaire/AntStone",
          contact=openapi.Contact(email="DSI@correounivalle.edu.co"),
          license=openapi.License(name="MIT License"),
      ),
      public=True,
      permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
      re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
      path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
      path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]
