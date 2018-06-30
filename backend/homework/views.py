from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
# Create your views here.


def index(request):
    return HttpResponse("hello man.")


def homeworks(request):
    ret = {"index": "value"}
    return JsonResponse(ret)


def homework(request,hwid):
    ret = {"index": "value"}
    return JsonResponse(ret)


def hwcomment(request, hwid):
    ret = {"index": "value"}
    return JsonResponse(ret)




