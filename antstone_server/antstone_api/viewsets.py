from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Obra, TareaDeObra, AvanceDeTarea
from .serializers import ObraSerializer, TareaDeObraSerializer, AvanceDeTareaSerializer

class ObraViewSet(viewsets.ModelViewSet):
    queryset = Obra.objects.all()
    serializer_class = ObraSerializer
    permission_classes = [IsAuthenticated]

class TareaDeObraViewSet(viewsets.ModelViewSet):
    queryset = TareaDeObra.objects.all()
    serializer_class = TareaDeObraSerializer
    permission_classes = [IsAuthenticated]

class AvanceDeTareaViewSet(viewsets.ModelViewSet):
    queryset = AvanceDeTarea.objects.all()
    serializer_class = AvanceDeTareaSerializer
    permission_classes = [IsAuthenticated]
