from rest_framework import serializers
from .models import Race


class RaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Race
        fields = ('name', 'date')

class RunnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Race
        fields = ('user', 'adminComment', 'classification')