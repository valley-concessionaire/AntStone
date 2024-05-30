from django.db.models.signals import post_migrate, post_save
from django.dispatch import receiver
from django.contrib.auth.models import Group, Permission
from .models import Capataz, DirectorDeObra, Gerente
from django.contrib.contenttypes.models import ContentType

@receiver(post_migrate)
def create_groups_and_permissions(sender, **kwargs):
    if sender.name != 'users':
        return

    # Define group names and corresponding permissions
    groups_permissions = {
        'Capataz': [
            'antstone_api.view_avancedetarea', 'antstone_api.add_avancedetarea', 'antstone_api.change_avancedetarea', 'antstone_api.delete_avancedetarea',
            'antstone_api.view_imagenavance', 'antstone_api.add_imagenavance', 'antstone_api.change_imagenavance', 'antstone_api.delete_imagenavance'
        ],
        'DirectorDeObra': [
            'antstone_api.view_obra', 'antstone_api.add_obra', 'antstone_api.change_obra', 'antstone_api.delete_obra',
            'antstone_api.view_tareadeobra', 'antstone_api.add_tareadeobra', 'antstone_api.change_tareadeobra', 'antstone_api.delete_tareadeobra',
            'antstone_api.view_avancedetarea', 'antstone_api.add_avancedetarea', 'antstone_api.change_avancedetarea', 'antstone_api.delete_avancedetarea',
            'antstone_api.view_imagenavance', 'antstone_api.add_imagenavance', 'antstone_api.change_imagenavance', 'antstone_api.delete_imagenavance',
        ],
        'Gerente': [
            'antstone_api.view_obra', 'antstone_api.add_obra', 'antstone_api.change_obra', 'antstone_api.delete_obra',
            'users.add_customuser', 'users.view_customuser', 'users.change_customuser', 'users.delete_customuser',
            'users.add_ayudantedealbanil', 'users.view_ayudantedealbanil', 'users.change_ayudantedealbanil', 'users.delete_ayudantedealbanil',
            'users.add_peon', 'users.view_peon', 'users.change_peon', 'users.delete_peon',
            'users.add_capataz', 'users.view_capataz', 'users.change_capataz', 'users.delete_capataz',
            'users.add_directordeobra', 'users.view_directordeobra', 'users.change_directordeobra', 'users.delete_directordeobra',
            'users.add_gerente', 'users.view_gerente', 'users.change_gerente', 'users.delete_gerente'
        ]
    }

    # Create groups and assign permissions
    for group_name, permissions in groups_permissions.items():
        group, created = Group.objects.get_or_create(name=group_name)
        for perm_name in permissions:
            try:
                app_label, codename = perm_name.split('.', 1)
                print(f"Trying to get ContentType for {app_label} and {codename}") 
                content_type = ContentType.objects.get(app_label=app_label, model=codename.split('_')[1])
                perm = Permission.objects.get(content_type=content_type, codename=perm_name.split('.', 1)[1])
                group.permissions.add(perm)
            except (Permission.DoesNotExist, ValueError):
                print(f"Permission '{perm_name}' not found")

@receiver(post_save, sender=Capataz)
def assign_capataz_permissions(sender, instance, created, **kwargs):
    if created:
        capataz_group = Group.objects.get(name='Capataz')
        instance.groups.add(capataz_group)
        capataz_permissions = Permission.objects.filter(group__name='Capataz')
        instance.user_permissions.add(*capataz_permissions)

@receiver(post_save, sender=DirectorDeObra)
def assign_director_permissions(sender, instance, created, **kwargs):
    if created:
        director_group = Group.objects.get(name='DirectorDeObra')
        instance.groups.add(director_group)
        director_permissions = Permission.objects.filter(group__name='DirectorDeObra')
        instance.user_permissions.add(*director_permissions)

@receiver(post_save, sender=Gerente)
def assign_gerente_permissions(sender, instance, created, **kwargs):
    if created:
        gerente_group = Group.objects.get(name='Gerente')
        instance.groups.add(gerente_group)
        gerente_permissions = Permission.objects.filter(group__name='Gerente')
        instance.user_permissions.add(*gerente_permissions)