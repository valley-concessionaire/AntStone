from rest_framework import viewsets
from .models import Obra, TareaDeObra, AvanceDeTarea
from .serializers import ObraSerializer, TareaDeObraSerializer, AvanceDeTareaSerializer

class ObraViewSet(viewsets.ModelViewSet):
    queryset = Obra.objects.all()
    serializer_class = ObraSerializer

class TareaDeObraViewSet(viewsets.ModelViewSet):
    queryset = TareaDeObra.objects.all()
    serializer_class = TareaDeObraSerializer

class AvanceDeTareaViewSet(viewsets.ModelViewSet):
    queryset = AvanceDeTarea.objects.all()
    serializer_class = AvanceDeTareaSerializer
