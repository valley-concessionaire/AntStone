from rest_framework import viewsets
from .models import Capataz, DirectorDeObra, Gerente, Peon, AyudanteDeAlbanil
from .serializers import CapatazSerializer, DirectorDeObraSerializer, GerenteSerializer, PeonSerializer, AyudanteDeAlbanilSerializer

class CapatazViewSet(viewsets.ModelViewSet):
    queryset = Capataz.objects.all()
    serializer_class = CapatazSerializer

class DirectorDeObraViewSet(viewsets.ModelViewSet):
    queryset = DirectorDeObra.objects.all()
    serializer_class = DirectorDeObraSerializer

class GerenteViewSet(viewsets.ModelViewSet):
    queryset = Gerente.objects.all()
    serializer_class = GerenteSerializer

class PeonViewSet(viewsets.ModelViewSet):
    queryset = Peon.objects.all()
    serializer_class = PeonSerializer

class AyudanteDeAlbanilViewSet(viewsets.ModelViewSet):
    queryset = AyudanteDeAlbanil.objects.all()
    serializer_class = AyudanteDeAlbanilSerializer
