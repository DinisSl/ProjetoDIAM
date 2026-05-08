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




class RunnerSignUp(models.Model):
    user=models.ForeignKey(Runner, on_delete=models.CASCADE)

    signUpDate=models.DateTimeField("Data e hora da Inscricao")
    STATE_CHOICES = {
        (1,"Banida"),
        (2,"Ativa" ),
        (3,"Cancelada")
    }


    state=models.CharField(choices=STATE_CHOICES)
    classification=models.IntegerField()
    race=models.ForeignKey(Race, on_delete=models.CASCADE)
    admincomment=models.TextField()

    def __str__(self):
        return self.user.user.first_name+" "+self.user.user.last_name

class VoluntarySignUp(models.Model):
    user=models.OneToOneField(Voluntary, on_delete=models.CASCADE)
    signUpDate=models.DateTimeField("Data e hora da Inscricao")
    ROLE_CHOICES = (
    (1,"EntregaDorsais"),
    (2,"ApoioNaPartida"),
    (3,"CoachDeBancada"),
    (4,"Orientacao"),
    (5,"Abatescimentos"),
    (6,"Seguranca"),
    (7,"PrimeirosSocorros"),
    (8,"Pacer")

    )
    role=models.CharField(choices=ROLE_CHOICES)
    STATE_CHOICES = (
    (1,"Pendente"),
    (2,"Aprovado"),
    (3,"Rejeitado")
    )
    state=models.CharField(choices=STATE_CHOICES)
    admincomment = models.TextField()

    def __str__(self):
        return self.user.user.first_name+" "+self.user.user.last_name




