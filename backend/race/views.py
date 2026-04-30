from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .serializers import *


@api_view(['GET', 'POST'])
def races(request):
    if request.method == 'GET':
        races_list = Race.objects.all()
        serializer = RaceSerializer(races_list, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = RaceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def race_detail(request, race_id):
    try:
        race = Race.objects.get(pk=race_id)
    except Race.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = RaceSerializer(race)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = RaceSerializer(race, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)

    elif request.method == 'DELETE':
        race.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    return Response(status=status.HTTP_400_BAD_REQUEST)
