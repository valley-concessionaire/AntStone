from django.db import models
from django.utils.translation import gettext_lazy as _
from users.models import DirectorDeObra, Capataz, Gerente, Peon, AyudanteDeAlbanil

ESTADO_CHOICES = [
    ('PENDING', 'Pending'),
    ('IN_PROGRESS', 'In Progress'),
    ('COMPLETED', 'Completed'),
]

class Obra(models.Model):
    nombre = models.CharField(max_length=255)
    fecha_inicio = models.DateTimeField()
    fecha_fin = models.DateTimeField()
    presupuesto = models.DecimalField(max_digits=10, decimal_places=2)
    estado = models.CharField(max_length=255, choices=ESTADO_CHOICES, default='PENDING')
    director = models.ForeignKey('users.DirectorDeObra', on_delete=models.CASCADE, related_name='obras')
    gerente = models.ForeignKey('users.Gerente', on_delete=models.CASCADE, related_name='obras')
    es_activo = models.BooleanField(default=True)

    def __str__(self):
        return self.nombre

    class Meta:
        verbose_name = _('obra')
        verbose_name_plural = _('obras')

class TareaDeObra(models.Model):
    nombre = models.CharField(max_length=255)
    descripcion = models.TextField()
    fecha_inicio = models.DateTimeField()
    fecha_fin = models.DateTimeField()
    estado = models.CharField(max_length=255, choices=ESTADO_CHOICES, default='PENDING')
    obra = models.ForeignKey(Obra, on_delete=models.CASCADE, related_name='tareas')
    peones = models.ManyToManyField('users.Peon', related_name='tareas')
    ayudantes_de_albanil = models.ManyToManyField('users.AyudanteDeAlbanil', related_name='tareas')
    es_activo = models.BooleanField(default=True)

    def __str__(self):
        return self.nombre

    class Meta:
        verbose_name = _('tarea de obra')
        verbose_name_plural = _('tareas de obra')

class AvanceDeTarea(models.Model):
    fecha = models.DateTimeField(auto_now_add=True)
    notas = models.TextField()
    ubicacion_long = models.DecimalField(max_digits=9, decimal_places=6)
    ubicacion_lat = models.DecimalField(max_digits=9, decimal_places=6)
    progreso = models.DecimalField(max_digits=5, decimal_places=2)
    tarea = models.ForeignKey(TareaDeObra, on_delete=models.CASCADE, related_name='avances')
    capataz = models.ForeignKey('users.Capataz', on_delete=models.CASCADE, related_name='avances')
    es_activo = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.tarea.nombre} - {self.progreso}%"

    class Meta:
        verbose_name = _('avance de tarea')
        verbose_name_plural = _('avances de tarea')

class ImagenAvance(models.Model):
    imagen = models.ImageField(upload_to='avances')
    avance_de_tarea = models.ForeignKey('AvanceDeTarea', on_delete=models.CASCADE, related_name='imagenes')

    def __str__(self):
        return f"Imagen de {self.avance_de_tarea.tarea.nombre}"