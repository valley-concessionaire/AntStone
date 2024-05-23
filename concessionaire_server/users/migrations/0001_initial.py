# Generated by Django 5.0.2 on 2024-05-22 23:12

import django.db.models.deletion
import django.utils.timezone
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='CustomUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('email', models.EmailField(max_length=254, unique=True, verbose_name='email address')),
                ('first_name', models.CharField(blank=True, max_length=30, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=30, verbose_name='last name')),
                ('is_staff', models.BooleanField(default=False, verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('groups', models.ManyToManyField(blank=True, related_name='%(class)s_groups', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, related_name='%(class)s_permissions', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'custom user',
                'verbose_name_plural': 'custom users',
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='AyudanteDeAlbanil',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'verbose_name': 'ayudante de albanil',
                'verbose_name_plural': 'ayudantes de albanil',
            },
        ),
        migrations.CreateModel(
            name='Peon',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'verbose_name': 'peon',
                'verbose_name_plural': 'peones',
            },
        ),
        migrations.CreateModel(
            name='Capataz',
            fields=[
                ('customuser_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL)),
                ('experiencia', models.CharField(max_length=255)),
                ('certificaciones', models.CharField(max_length=255)),
            ],
            options={
                'verbose_name': 'capataz',
                'verbose_name_plural': 'capataces',
            },
            bases=('users.customuser',),
        ),
        migrations.CreateModel(
            name='DirectorDeObra',
            fields=[
                ('customuser_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL)),
                ('experiencia', models.CharField(max_length=255)),
                ('titulo', models.CharField(max_length=255)),
            ],
            options={
                'verbose_name': 'director de obra',
                'verbose_name_plural': 'directores de obra',
            },
            bases=('users.customuser',),
        ),
        migrations.CreateModel(
            name='Gerente',
            fields=[
                ('customuser_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL)),
                ('experiencia', models.CharField(max_length=255)),
                ('titulo', models.CharField(max_length=255)),
            ],
            options={
                'verbose_name': 'gerente',
                'verbose_name_plural': 'gerentes',
            },
            bases=('users.customuser',),
        ),
    ]
