from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.


def search(request):
    ret = {"index": "value"}
    return JsonResponse(ret)


def trend(request, cuid):
    ret = {"index": "value"}
    return JsonResponse(ret)


def distribution(request, cuid):
    ret = {"index": "value"}
    return JsonResponse(ret)

def scores(requests, cuid):
    ret = {"index": "value"}
    return JsonResponse(ret)


def scores(request, cuid):
    ret = {"index": "value"}
    return JsonResponse(ret)


def overview(request, cuid):
    ret = {"index": "value"}
    return JsonResponse(ret)


def homeworks(request, cuid):
    ret = {"index": "value"}
    return JsonResponse(ret)


def materials(request, cuid):
    ret = {"index": "value"}
    return JsonResponse(ret)


def comment(request, cuid):
    ret = {"index": "value"}
    return JsonResponse(ret)

