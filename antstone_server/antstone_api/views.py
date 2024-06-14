from django.shortcuts import render

from rest_framework import generics
from rest_framework.response import Response
from .models import Obra
from .serializers import ObraSerializer

class CountObrasView(generics.GenericAPIView):
    serializer_class = ObraSerializer  # Use the serializer to respond with obra data

    def get(self, request, *args, **kwargs):
        total_obras = Obra.objects.count()
        return Response({'total_obras': total_obras})

