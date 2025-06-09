"""this file contains the views for the main app."""
# Create your views here.

from django.http import HttpRequest, HttpResponse
from django.shortcuts import render


def index(request: HttpRequest) -> HttpResponse:
    """Home page view."""
    return render(request, "main/index.html")


def about(request: HttpRequest) -> HttpResponse:
    """About page view."""
    return render(request, "main/about.html")


def contact(request: HttpRequest) -> HttpResponse:
    """Contact page view."""
    return render(request, "main/contact.html")


def services(request: HttpRequest) -> HttpResponse:
    """Services page view."""
    return render(request, "main/services.html")


def gallery(request: HttpRequest) -> HttpResponse:
    """Gallery page view."""
    return render(request, "main/gallery.html")


def blog(request: HttpRequest) -> HttpResponse:
    """Blog page view."""
    return render(request, "main/blog.html")
