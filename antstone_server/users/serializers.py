from rest_framework import serializers
from .models import Capataz, DirectorDeObra, Gerente, Peon, AyudanteDeAlbanil

class CapatazSerializer(serializers.ModelSerializer):
    class Meta:
        model = Capataz
        fields = '__all__'
        extra_kwargs = {"password": {"write_only": True}}

class DirectorDeObraSerializer(serializers.ModelSerializer):
    class Meta:
        model = DirectorDeObra
        fields = '__all__'
        extra_kwargs = {"password": {"write_only": True}}

class GerenteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gerente
        fields = '__all__'
        extra_kwargs = {"password": {"write_only": True}}

class PeonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Peon
        fields = '__all__'
        extra_kwargs = {"password": {"write_only": True}}

class AyudanteDeAlbanilSerializer(serializers.ModelSerializer):
    class Meta:
        model = AyudanteDeAlbanil
        fields = '__all__'
        extra_kwargs = {"password": {"write_only": True}}
