from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Obra, TareaDeObra, AvanceDeTarea, ImagenAvance
from .serializers import ObraSerializer, TareaDeObraSerializer, AvanceDeTareaSerializer, AvanceDeTareaCreateSerializer, ImagenAvanceSerializer

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

    def get_serializer_class(self):
        if self.action in ['create', 'update']:
            return AvanceDeTareaCreateSerializer
        return AvanceDeTareaSerializer
    
class ImagenAvanceViewSet(viewsets.ModelViewSet):
    queryset = ImagenAvance.objects.all()
    serializer_class = ImagenAvanceSerializer
