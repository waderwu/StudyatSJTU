from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.


def bx(request):
    ret = {"index": "value"}
    return JsonResponse(ret)

def xx(request, ctype):
    ret = {"index": "value"}
    return JsonResponse(ret)