from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext_lazy as _
from .models import Capataz, DirectorDeObra, Gerente, Peon, AyudanteDeAlbanil
from .models import CustomUser
from django.contrib.auth.models import Group, Permission
from django.contrib.contenttypes.models import ContentType
from antstone_api.models import Obra, TareaDeObra, AvanceDeTarea

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

def create_group_with_permissions():
    # Mueve la creación de grupos y asignación de permisos a una función
    gerente_permissions = {
        Obra: ['view_obra', 'add_obra', 'change_obra', 'delete_obra'],
        TareaDeObra: ['view_tareadeobra', 'add_tareadeobra', 'change_tareadeobra', 'delete_tareadeobra'],
        AvanceDeTarea: ['view_avancedetarea', 'add_avancedetarea', 'change_avancedetarea', 'delete_avancedetarea'],
        CustomUser: ['view_customuser', 'add_customuser', 'change_customuser', 'delete_customuser']
    }

    director_permissions = {
        Obra: ['view_obra', 'add_obra', 'change_obra', 'delete_obra'],
        TareaDeObra: ['view_tareadeobra', 'add_tareadeobra', 'change_tareadeobra', 'delete_tareadeobra']
    }

    capataz_permissions = {
        AvanceDeTarea: ['view_avancedetarea', 'add_avancedetarea', 'change_avancedetarea', 'delete_avancedetarea']
    }

    # Crea grupos con permisos solo si no existen
    create_group_if_not_exists('Gerente', gerente_permissions)
    create_group_if_not_exists('DirectorDeObra', director_permissions)
    create_group_if_not_exists('Capataz', capataz_permissions)

def create_group_if_not_exists(group_name, model_permissions):
    group, created = Group.objects.get_or_create(name=group_name)
    if created:
        for model, permissions in model_permissions.items():
            ct = ContentType.objects.get_for_model(model)
            for perm in permissions:
                permission = Permission.objects.get(codename=perm, content_type=ct)
                group.permissions.add(permission)

# Llama a la función para crear grupos con permisos después de inicializar la app
if __name__ == '__main__':
    create_group_with_permissions()