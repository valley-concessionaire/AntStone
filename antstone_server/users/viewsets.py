from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Capataz, DirectorDeObra, Gerente, Peon, AyudanteDeAlbanil
from .serializers import CapatazSerializer, DirectorDeObraSerializer, GerenteSerializer, PeonSerializer, AyudanteDeAlbanilSerializer

class CapatazViewSet(viewsets.ModelViewSet):
    queryset = Capataz.objects.all()
    serializer_class = CapatazSerializer
    permission_classes = [IsAuthenticated]

class DirectorDeObraViewSet(viewsets.ModelViewSet):
    queryset = DirectorDeObra.objects.all()
    serializer_class = DirectorDeObraSerializer
    permission_classes = [IsAuthenticated]

class GerenteViewSet(viewsets.ModelViewSet):
    queryset = Gerente.objects.all()
    serializer_class = GerenteSerializer
    permission_classes = [IsAuthenticated]

class PeonViewSet(viewsets.ModelViewSet):
    queryset = Peon.objects.all()
    serializer_class = PeonSerializer
    permission_classes = [IsAuthenticated]

class AyudanteDeAlbanilViewSet(viewsets.ModelViewSet):
    queryset = AyudanteDeAlbanil.objects.all()
    serializer_class = AyudanteDeAlbanilSerializer
    permission_classes = [IsAuthenticated]
