from django.db import models

class Race(models.Model):
    name = models.CharField(max_length=200)
    date = models.DateTimeField('Data e hora da corrida')

    def __str__(self):
        return self.name