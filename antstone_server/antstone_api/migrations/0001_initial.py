# Generated by Django 5.0.2 on 2024-05-23 15:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AvanceDeTarea',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateTimeField(auto_now_add=True)),
                ('notas', models.TextField()),
                ('ubicacion_long', models.DecimalField(decimal_places=6, max_digits=9)),
                ('ubicacion_lat', models.DecimalField(decimal_places=6, max_digits=9)),
                ('foto', models.ImageField(blank=True, null=True, upload_to='avances')),
                ('progreso', models.DecimalField(decimal_places=2, max_digits=5)),
            ],
            options={
                'verbose_name': 'avance de tarea',
                'verbose_name_plural': 'avances de tarea',
            },
        ),
        migrations.CreateModel(
            name='Obra',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=255)),
                ('fecha_inicio', models.DateTimeField()),
                ('fecha_fin', models.DateTimeField()),
                ('presupuesto', models.DecimalField(decimal_places=2, max_digits=10)),
                ('estado', models.CharField(choices=[('PENDING', 'Pending'), ('IN_PROGRESS', 'In Progress'), ('COMPLETED', 'Completed')], default='PENDING', max_length=255)),
            ],
            options={
                'verbose_name': 'obra',
                'verbose_name_plural': 'obras',
            },
        ),
        migrations.CreateModel(
            name='TareaDeObra',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=255)),
                ('descripcion', models.TextField()),
                ('fecha_inicio', models.DateTimeField()),
                ('fecha_fin', models.DateTimeField()),
                ('estado', models.CharField(choices=[('PENDING', 'Pending'), ('IN_PROGRESS', 'In Progress'), ('COMPLETED', 'Completed')], default='PENDING', max_length=255)),
            ],
            options={
                'verbose_name': 'tarea de obra',
                'verbose_name_plural': 'tareas de obra',
            },
        ),
    ]