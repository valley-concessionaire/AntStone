from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth import get_user_model
from .models import Capataz, DirectorDeObra, Gerente

User = get_user_model()

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims
        token['username'] = user.first_name + ' ' + user.last_name
        token['email'] = user.email
        return token

    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)

        # Determine user type
        user_type = 'Regular User'
        print("Tipo de usuario")
        print(User)
        if hasattr(self.user, 'capataz'):
            user_type = 'Capataz'
        elif hasattr(self.user, 'directordeobra'):
            user_type = 'DirectorDeObra'
        elif hasattr(self.user, 'gerente'):
            user_type = 'Gerente'

        # Add extra responses here
        data['user'] = {
            'full_name': self.user.first_name + ' ' + self.user.last_name,
            'email': self.user.email,
            'is_staff': self.user.is_staff,
            'user_type': user_type
        }
        return data

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer
