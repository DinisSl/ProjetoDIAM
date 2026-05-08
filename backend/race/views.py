from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.contrib.auth import authenticate, login, logout
from .serializers import *
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated



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




@api_view(['GET', 'POST'])
def runners(request):
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


@api_view(['PUT', 'DELETE'])
def runners_detail(request, runner_id, race_id):
    try:
        runner = Runner.objects.get(pk=runner_id)
    except Runner.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = RaceSerializer(runner, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)

    elif request.method == 'DELETE':
        runner.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def signup(request):
    username = request.data.get('username')
    password = request.data.get('password')

    if not username or not password:
        return Response({'msg': 'invalid username/password'}, status=status.HTTP_400_BAD_REQUEST)

    if User.objects.filter(username=username).exists():
        return Response({'msg': 'username already exists'}, status=status.HTTP_400_BAD_REQUEST)

    user = User.objects.create_user(username=username, password=password)
    return Response({'msg': 'user ' + user.username + ' created'}, status=status.HTTP_201_CREATED)


@api_view(['POST'])
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(
        request,
        username=username,
        password=password
    )

    if user is not None:
        login(request, user)  # Criação da sessão
        return Response({'msg': 'user logged in'})

    return Response(
        {'msg': 'invalid credentials'},
        status=status.HTTP_401_UNAUTHORIZED
    )


@api_view(['GET'])
def logout_view(request):
    logout(request)
    return Response({'msg': 'user logged out'})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_view(request):
    return Response({'username': request.user.username})