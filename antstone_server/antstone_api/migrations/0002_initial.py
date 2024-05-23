# Generated by Django 5.0.2 on 2024-05-23 15:27

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('antstone_api', '0001_initial'),
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='avancedetarea',
            name='capataz',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='avances', to='users.capataz'),
        ),
        migrations.AddField(
            model_name='obra',
            name='director',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='obras', to='users.directordeobra'),
        ),
        migrations.AddField(
            model_name='obra',
            name='gerente',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='obras', to='users.gerente'),
        ),
        migrations.AddField(
            model_name='tareadeobra',
            name='ayudantes_de_albanil',
            field=models.ManyToManyField(related_name='tareas', to='users.ayudantedealbanil'),
        ),
        migrations.AddField(
            model_name='tareadeobra',
            name='obra',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tareas', to='antstone_api.obra'),
        ),
        migrations.AddField(
            model_name='tareadeobra',
            name='peones',
            field=models.ManyToManyField(related_name='tareas', to='users.peon'),
        ),
        migrations.AddField(
            model_name='avancedetarea',
            name='tarea',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='avances', to='antstone_api.tareadeobra'),
        ),
    ]