from django.shortcuts import render
from rest_framework import generics,filters
from .serializers import PlaceSerializers
from django.http import JsonResponse
from .models import Place
from django_filters.rest_framework import DjangoFilterBackend

class PlaceList(generics.ListAPIView):
    queryset = Place.objects.all()
    serializer_class = PlaceSerializers
    filter_backends = [DjangoFilterBackend,filters.SearchFilter]
    filterset_fields = ['category']
    search_fields = ['name','description']

# Create your views here.
