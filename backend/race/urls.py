from django.urls import path
from . import views

app_name = 'votacao'

urlpatterns = [
    path('api/races/', views.races),
    path('api/race/<int:race_id>', views.race_detail),
    path('api/runners/', views.races),
    path('api/runners/<int:race_id>', views.runners_detail),
]