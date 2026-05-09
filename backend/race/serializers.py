from rest_framework import serializers
from .models import *


class RaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Race
        fields = ('name', 'date')

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('user', 'birthDate','phoneNumber', 'gender', 'clothingSize')