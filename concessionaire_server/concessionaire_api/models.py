from django.db import models
from users.models import DirectorDeObra, Capataz, Gerente, Peon, AyudanteDeAlbanil

# Create your models here.
class Obra(models.Model):
    nombre = models.CharField(max_length=255)
    fecha_inicio = models.DateTimeField()
    fecha_fin = models.DateTimeField()
    presupuesto = models.DecimalField(max_digits=10, decimal_places=2)
    estado = models.CharField(max_length=255)
    director = models.ForeignKey(DirectorDeObra, on_delete=models.CASCADE, related_name='obras')
    gerente = models.ForeignKey(Gerente, on_delete=models.CASCADE, related_name='obras')

class TareaDeObra(models.Model):
    nombre = models.CharField(max_length=255)
    descripcion = models.TextField()
    fecha_inicio = models.DateTimeField()
    fecha_fin = models.DateTimeField()
    estado = models.CharField(max_length=255)
    obra = models.ForeignKey('Obra', on_delete=models.CASCADE, related_name='tareas')
    peones = models.ManyToManyField(Peon, related_name='tareas')
    ayudantes_de_albanil = models.ManyToManyField(AyudanteDeAlbanil, related_name='tareas')

class AvanceDeTarea(models.Model):
    fecha = models.DateTimeField()
    notas = models.TextField()
    ubicacion_long = models.DecimalField(max_digits=9, decimal_places=6)
    ubicacion_lat = models.DecimalField(max_digits=9, decimal_places=6)
    foto = models.ImageField(upload_to='avances', null=True, blank=True)
    progreso = models.DecimalField(max_digits=5, decimal_places=2)
    tarea = models.ForeignKey('TareaDeObra', on_delete=models.CASCADE, related_name='avances')
    capataz = models.ForeignKey(Capataz, on_delete=models.CASCADE, related_name='avances')