from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext_lazy as _
from .models import Capataz, DirectorDeObra, Gerente, Peon, AyudanteDeAlbanil
from .models import CustomUser

class CustomUserAdmin(BaseUserAdmin):
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('first_name', 'last_name')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'first_name', 'last_name', 'password1', 'password2'),
        }),
    )
    list_display = ('email', 'first_name', 'last_name', 'is_staff', 'is_active')
    search_fields = ('email', 'first_name', 'last_name')
    ordering = ('email',)

admin.site.register(CustomUser, CustomUserAdmin)

class CustomUserAdmin(BaseUserAdmin):
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        (_('Personal info'), {'fields': ('first_name', 'last_name')}),
        (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'first_name', 'last_name', 'password1', 'password2'),
        }),
    )
    list_display = ('email', 'first_name', 'last_name', 'is_staff')
    search_fields = ('email', 'first_name', 'last_name')
    ordering = ('email',)

@admin.register(Capataz)
class CapatazAdmin(CustomUserAdmin):
    fieldsets = CustomUserAdmin.fieldsets + (
        (_('Additional info'), {'fields': ('experiencia', 'certificaciones')}),
    )
    list_display = CustomUserAdmin.list_display + ('experiencia', 'certificaciones')

@admin.register(DirectorDeObra)
class DirectorDeObraAdmin(CustomUserAdmin):
    fieldsets = CustomUserAdmin.fieldsets + (
        (_('Additional info'), {'fields': ('experiencia', 'titulo')}),
    )
    list_display = CustomUserAdmin.list_display + ('experiencia', 'titulo')

@admin.register(Gerente)
class GerenteAdmin(CustomUserAdmin):
    fieldsets = CustomUserAdmin.fieldsets + (
        (_('Additional info'), {'fields': ('experiencia', 'titulo')}),
    )
    list_display = CustomUserAdmin.list_display + ('experiencia', 'titulo')

@admin.register(Peon)
class PeonAdmin(admin.ModelAdmin):
    list_display = ['__str__']
    search_fields = ['id']

@admin.register(AyudanteDeAlbanil)
class AyudanteDeAlbanilAdmin(admin.ModelAdmin):
    list_display = ['__str__']
    search_fields = ['id']
