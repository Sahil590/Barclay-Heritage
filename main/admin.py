"""Django admin configuration for the main app."""
# Register your models here.

from django.contrib import admin

from .models import Car, Visitor

admin.site.register(Car)
admin.site.register(Visitor)
