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

    def get_queryset(self):
        queryset = TareaDeObra.objects.all()
        obra_id = self.kwargs.get('obra_pk')
        if obra_id is not None:
            queryset = queryset.filter(obra_id=obra_id)
        return queryset

class AvanceDeTareaViewSet(viewsets.ModelViewSet):
    queryset = AvanceDeTarea.objects.all()

    def get_serializer_class(self):
        if self.action in ['create', 'update']:
            return AvanceDeTareaCreateSerializer
        return AvanceDeTareaSerializer
    
class ImagenAvanceViewSet(viewsets.ModelViewSet):
    queryset = ImagenAvance.objects.all()
    serializer_class = ImagenAvanceSerializer
