from rest_framework import serializers
from .models import Obra, TareaDeObra, AvanceDeTarea

class ObraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Obra
        fields = '__all__'

class TareaDeObraSerializer(serializers.ModelSerializer):
    class Meta:
        model = TareaDeObra
        fields = '__all__'

class AvanceDeTareaSerializer(serializers.ModelSerializer):
    class Meta:
        model = AvanceDeTarea
        fields = '__all__'
