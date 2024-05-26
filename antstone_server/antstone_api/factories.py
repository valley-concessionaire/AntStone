# myapp/factories.py
import factory
from users.models import CustomUser

class MyModelFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = CustomUser

    name = factory.Faker('name')
