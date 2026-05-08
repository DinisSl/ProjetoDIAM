from django.db import models
from django.contrib.auth.models import User

class Race(models.Model):
    name = models.CharField(max_length=200)
    date = models.DateTimeField('Data e hora da corrida')

    def __str__(self):
        return self.name

class Runner(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    adminComment = models.CharField(max_length=200)
    classification = models.IntegerField()

    def __str__(self):
        return self.user.first_name + " " + self.user.last_name

class Voluntary(models.Model):
    user = models.OneToOneField(User, on_delete = models.CASCADE)
    phoneNumber = models.CharField(max_length=20)

    def __str__(self):
        return self.user.first_name + " " + self.user.last_name






class Tarefas(models.Model):
    nae