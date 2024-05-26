
from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from users.models import CustomUser

"""
class CustomUserTests(APITestCase):
    def setUp(self):
        self.my_model = CustomUser.objects.create(name='Test')

    def test_create_my_model(self):
        url = reverse('mymodel-list')
        data = {'name': 'Test'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_get_my_model(self):
        url = reverse('mymodel-detail', kwargs={'pk': self.my_model.pk})
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['name'], 'Test')


 class CustomUserTests(APITestCase):
    def setUp(self):
        self.my_model = CustomUserFactory()

    def test_create_my_model(self):
        url = reverse('mymodel-list')
        data = {'name': 'New Test'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_get_my_model(self):
        url = reverse('mymodel-detail', kwargs={'pk': self.my_model.pk})
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['name'], self.my_model.name)       
"""
