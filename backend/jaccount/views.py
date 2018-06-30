from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.


def saveclass(request,hwid):
    ret = {"index": "value"}
    return JsonResponse(ret)


def savescore(request, hwid):
    ret = {"index": "value"}
    return JsonResponse(ret)


def savegpa(request, hwid):
    ret = {"index": "value"}
    return JsonResponse(ret)