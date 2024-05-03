from django.utils import timezone
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, Group, Permission
from django.db import models
from django.utils.translation import gettext_lazy as _

class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_('email address'), unique=True)
    first_name = models.CharField(_('first name'), max_length=30, blank=True)
    last_name = models.CharField(_('last name'), max_length=30, blank=True)
    is_staff = models.BooleanField(_('staff status'), default=False)
    is_active = models.BooleanField(_('active'), default=True)
    date_joined = models.DateTimeField(_('date joined'), default=timezone.now)

    # Add unique related_name arguments to resolve clashes
    groups = models.ManyToManyField(Group, verbose_name=_('groups'), blank=True, related_name='customuser_groups')
    user_permissions = models.ManyToManyField(Permission, verbose_name=_('user permissions'), blank=True, related_name='customuser_permissions')

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    def __str__(self):
        return self.email

class Capataz(CustomUser):
    experiencia = models.CharField(max_length=255)
    certificaciones = models.CharField(max_length=255)

    class Meta:
        verbose_name = _('capataz')
        verbose_name_plural = _('capataces')

class DirectorDeObra(CustomUser):
    experiencia = models.CharField(max_length=255)
    titulo = models.CharField(max_length=255)

    class Meta:
        verbose_name = _('director de obra')
        verbose_name_plural = _('directores de obra')

class Gerente(CustomUser):
    experiencia = models.CharField(max_length=255)
    titulo = models.CharField(max_length=255)

    class Meta:
        verbose_name = _('gerente')
        verbose_name_plural = _('gerentes')

class Peon(models.Model):
    # No additional fields, only the default primary key (id)

    def __str__(self):
        return f"Peon {self.pk}"

class AyudanteDeAlbanil(models.Model):
    # No additional fields, only the default primary key (id)

    def __str__(self):
        return f"AyudanteDeAlbanil {self.pk}"

# Custom permissions / Maybe not Necessary
class CustomPermission(Permission):
    class Meta:
        proxy = True
        verbose_name = _('custom permission')
        verbose_name_plural = _('custom permissions')