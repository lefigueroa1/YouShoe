from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .products import products
# Create your views here.

def index(request):
    index_file = open("static/index.html").read()
    return HttpResponse(index_file)

@api_view(["GET"])
def getProducts(request):
    return Response(products)

@api_view(["GET"])
def getProduct(request,pk):
    product = None
    pk = int(pk)
    for i in products:
        if i["id"] == pk:
            product = i
            break
    return Response(product)