from django.utils import timezone
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.db import models
from django.utils.translation import gettext_lazy as _

class CustomUserManager(BaseUserManager):
    def create_user(self, email, first_name, last_name, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, first_name=first_name, last_name=last_name, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, first_name, last_name, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, first_name, last_name, password, **extra_fields)

class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_('email address'), unique=True)
    first_name = models.CharField(_('first name'), max_length=30, blank=True)
    last_name = models.CharField(_('last name'), max_length=30, blank=True)
    is_staff = models.BooleanField(_('staff status'), default=False)
    is_active = models.BooleanField(_('active'), default=True)
    date_joined = models.DateTimeField(_('date joined'), default=timezone.now)
    es_activo = models.BooleanField(default=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    objects = CustomUserManager()

    def __str__(self):
        return self.email

    class Meta:
        abstract = False
        verbose_name = _('custom user')
        verbose_name_plural = _('custom users')

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
    def __str__(self):
        return f"Peon {self.pk}"

    class Meta:
        verbose_name = _('peon')
        verbose_name_plural = _('peones')

class AyudanteDeAlbanil(models.Model):
    def __str__(self):
        return f"Ayudante De Albanil {self.pk}"

    class Meta:
        verbose_name = _('ayudante de albanil')
        verbose_name_plural = _('ayudantes de albanil')
