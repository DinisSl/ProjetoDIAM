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


class RunnerSignUp(models.Model):
    user=models.OneToOneField(Runner, on_delete=models.CASCADE)
    signUpDate=models.DateTimeField("Data e hora da Inscricao")
    STATE_CHOICES = (
    ("Banida","Ban","B"),
    ("Ativa", "Active", "A"),
    ("Cancelada","Canceled","C")
    )
    state=models.ChoiceField(choices=STATE_CHOICES)
    classification=models.IntegerField()
    race=models.OneToOneField(Race, on_delete=models.CASCADE)
    admincomment=models.TextField()

    def __str__(self):
        return self.user.first_name+" "+self.user.last_name

class VoluntarySignUp(models.Model):
    user=models.OneToOneField(Voluntary, on_delete=models.CASCADE)
    signUpDate=models.DateTimeField("Data e hora da Inscricao")
    ROLE_CHOICES = (
    ("EntregaDorsais","ED"),
    ("ApoioNaPartida","AP"),
    ("CoachDeBancada","CB"),
    ("Orientacao","O"),
    ("Abatescimentos","A"),
    ("Seguranca","S"),
    ("PrimeirosSocorros","PS"),
    ("Pacer","P")

    )
    role=models.ChoiceField(choices=ROLE_CHOICES)
    STATE_CHOICES = (
    ("Pendente","P"),
    ("Aprovado","A"),
    ("Rejeitado","R")
    )
    state=models.ChoiceField(choices=STATE_CHOICES)
    admincomment = models.TextField()

    def __str__(self):
        return self.user.first_name+" "+self.user.last_name




