"""URL configuration for portfolio project."""

from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("about/", views.about, name="about"),
    path("contact/", views.contact, name="contact"),
    path("services/", views.services, name="services"),
    path("gallery/", views.gallery, name="gallery"),
    path("blog/", views.blog, name="blog"),
]
