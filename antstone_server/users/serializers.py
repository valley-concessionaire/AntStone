from rest_framework import serializers
from .models import Capataz, DirectorDeObra, Gerente, Peon, AyudanteDeAlbanil

class CapatazSerializer(serializers.ModelSerializer):
    class Meta:
        model = Capataz
        exclude = ['user_permissions', 'groups', 'date_joined', 'last_login']
        extra_kwargs = {"password": {"write_only": True}}

class DirectorDeObraSerializer(serializers.ModelSerializer):
    class Meta:
        model = DirectorDeObra
        exclude = ['user_permissions', 'groups', 'date_joined', 'last_login']
        extra_kwargs = {"password": {"write_only": True}}

class GerenteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gerente
        exclude = ['user_permissions', 'groups', 'date_joined', 'last_login']
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
