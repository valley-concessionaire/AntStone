from users.serializers import AyudanteDeAlbanilSerializer, DirectorDeObraSerializer, GerenteSerializer, PeonSerializer
from rest_framework import serializers
from .models import Obra, TareaDeObra, AvanceDeTarea, ImagenAvance

class ObraSerializer(serializers.ModelSerializer):
    director = DirectorDeObraSerializer()
    gerente = GerenteSerializer()
    class Meta:
        model = Obra
        fields = '__all__'

class TareaDeObraSerializer(serializers.ModelSerializer):

    obra = ObraSerializer(read_only=True)
    peones = PeonSerializer(many=True, read_only=True)
    ayudantes_de_albanil = AyudanteDeAlbanilSerializer(many=True, read_only=True)

    class Meta:
        model = TareaDeObra
        fields = '__all__'

class ImagenAvanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImagenAvance
        fields = ('id', 'imagen')

class AvanceDeTareaSerializer(serializers.ModelSerializer):
    imagenes = ImagenAvanceSerializer(many=True, read_only=True)

    class Meta:
        model = AvanceDeTarea
        fields = ('id', 'fecha', 'notas', 'ubicacion_long', 'ubicacion_lat', 'progreso', 'tarea', 'capataz', 'imagenes')

class AvanceDeTareaCreateSerializer(serializers.ModelSerializer):
    imagenes = serializers.ListField(
        child=serializers.ImageField(),
        write_only=True
    )

    class Meta:
        model = AvanceDeTarea
        fields = ('id', 'fecha', 'notas', 'ubicacion_long', 'ubicacion_lat', 'progreso', 'tarea', 'capataz', 'imagenes')

    def create(self, validated_data):
        imagenes = validated_data.pop('imagenes')
        avance = AvanceDeTarea.objects.create(**validated_data)
        for imagen in imagenes:
            ImagenAvance.objects.create(avance_de_tarea=avance, imagen=imagen)
        return avance