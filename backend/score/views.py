from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.


def termgpa(request, tmid):
    ret = {"index": "value"}
    return JsonResponse(ret)


def termxjf(request, tmid):
    ret = {"index": "value"}
    return JsonResponse(ret)


def termhxxjf(request, tmid):
    ret = {"index": "value"}
    return JsonResponse(ret)


def gpa(request, mjid):
    ret = {"index": "value"}
    return JsonResponse(ret)

def xjf(request, mjid):
    ret = {"index": "value"}
    return JsonResponse(ret)


def hxxjf(request, mjid):
    ret = {"index": "value"}
    return JsonResponse(ret)