# antstone_api/admin.py

from django.contrib import admin
from .models import Obra, TareaDeObra, AvanceDeTarea, ImagenAvance

@admin.register(Obra)
class ObraAdmin(admin.ModelAdmin):
    list_display = ['nombre', 'fecha_inicio', 'fecha_fin', 'presupuesto', 'estado', 'director', 'gerente']
    list_filter = ['estado', 'fecha_inicio', 'fecha_fin']
    search_fields = ['nombre', 'director__first_name', 'director__last_name', 'gerente__first_name', 'gerente__last_name']

@admin.register(TareaDeObra)
class TareaDeObraAdmin(admin.ModelAdmin):
    list_display = ['nombre', 'descripcion', 'fecha_inicio', 'fecha_fin', 'estado', 'obra']
    list_filter = ['estado', 'fecha_inicio', 'fecha_fin']
    search_fields = ['nombre', 'obra__nombre']

@admin.register(AvanceDeTarea)
class AvanceDeTareaAdmin(admin.ModelAdmin):
    list_display = ['fecha', 'notas', 'ubicacion_long', 'ubicacion_lat', 'progreso', 'tarea', 'capataz']
    list_filter = ['fecha', 'progreso']
    search_fields = ['tarea__nombre', 'capataz__first_name', 'capataz__last_name']

@admin.register(ImagenAvance)
class ImagenAvanceAdmin(admin.ModelAdmin):
    list_display = ['id', 'avance_de_tarea', 'imagen']
    list_filter = ['avance_de_tarea']
    search_fields = ['avance_de_tarea__id']