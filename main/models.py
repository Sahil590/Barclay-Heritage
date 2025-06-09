"""Models for the main application."""
# Create your models here.

from django.db import models


class Car(models.Model):
    """Model representing a car."""

    name = models.CharField(max_length=100)
    manufacturer = models.CharField(max_length=100)
    year = models.PositiveIntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    pictures = models.ImageField(upload_to="car_images/", blank=True, null=True)
    mileage = models.PositiveIntegerField(default=0, help_text="Mileage in miles")
    description = models.TextField(
        blank=True, help_text="Detailed description of the car"
    )

    def __str__(self):
        """String representation of the car model."""
        return f"{self.name} ({self.year}) by {self.manufacturer}"


class Visitor(models.Model):
    """Model representing a visitor."""

    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)

    def __str__(self):
        """String representation of the visitor."""
        return f"{self.first_name} {self.last_name} ({self.email})"
