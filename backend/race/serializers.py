from rest_framework import serializers
from .models import *


class RaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Race
        fields = ('name', 'date')

class RunnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Runner
        fields = ('user', 'adminComment', 'classification')