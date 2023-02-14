from django.urls import path, re_path
from . import views

urlpatterns = [
    path("" , views.index),
    path("products/", views.getProducts, name="products"),
    path("products/<str:pk>/", views.getProduct, name="product"),
    re_path(r'.*', views.index),
]