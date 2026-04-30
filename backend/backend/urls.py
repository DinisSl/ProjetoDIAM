from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('race/', include('race.urls')),
    path('admin/', admin.site.urls),
]
