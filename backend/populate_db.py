import os
import django
from django.utils import timezone

# Set up the Django environment
# Make sure to replace 'your_project_name' with the actual name of your Django project
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

# Import the models
# Replace 'your_app_name' with the name of the app where your models are defined
from race.models import Race, Runner, Voluntary, RunnerSignUp, VoluntarySignUp
from django.contrib.auth.models import User


def populate():
    print("Clearing old data (keeping Races)...")
    # Clean existing data to avoid conflicts, but DO NOT delete Races
    RunnerSignUp.objects.all().delete()
    VoluntarySignUp.objects.all().delete()
    Runner.objects.all().delete()
    Voluntary.objects.all().delete()

    # Clean up only the specific users this script creates
    User.objects.filter(username__in=['runner1', 'runner2', 'vol1']).delete()

    now = timezone.now()

    print("Fetching existing Race...")
    # Fetch the S. Silvestre race shown in your database viewer (id=1)
    try:
        existing_race = Race.objects.get(id=1)
        print(f"Successfully found: {existing_race.name}")
    except Race.DoesNotExist:
        print("Error: Could not find a Race with id=1.")
        return

    print("Creating Users...")
    user1 = User.objects.create_user(username='runner1', first_name='John', last_name='Doe', password='password123')
    user2 = User.objects.create_user(username='runner2', first_name='Jane', last_name='Smith', password='password123')
    user_vol1 = User.objects.create_user(username='vol1', first_name='Alice', last_name='Wonder',
                                         password='password123')

    print("Creating Runner and Voluntary profiles...")
    runner1 = Runner.objects.create(user=user1, adminComment='Ready for S. Silvestre.', classification=1)
    runner2 = Runner.objects.create(user=user2, adminComment='First time running.', classification=2)
    vol1 = Voluntary.objects.create(user=user_vol1, phoneNumber='+351912345678')

    print("Creating Runner SignUps...")

    # Because it is a ForeignKey, we can assign the race directly inside create() again
    RunnerSignUp.objects.create(
        user=runner1,
        signUpDate=now,
        state=2,  # "Ativa"
        classification=1,
        race=existing_race,
        admincomment='Needs to pick up kit early'
    )

    RunnerSignUp.objects.create(
        user=runner2,
        signUpDate=now,
        state=2,  # "Ativa"
        classification=2,
        race=existing_race,
        admincomment='No comments'
    )

    print("Creating Voluntary SignUp...")
    VoluntarySignUp.objects.create(
        user=vol1,
        signUpDate=now,
        role=1,  # "EntregaDorsais"
        state=2,  # "Aprovado"
        admincomment='Experienced volunteer'
    )

    print("Database successfully populated with multiple runners using ForeignKey!")


if __name__ == '__main__':
    populate()