"""studyatsjtu URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from homework import views as hwviews
from course import views as cuviews
from score import views as scviews
from electsys import views as ecviews
from jaccount import views as javiews


urlpatterns = [
    path('homework/', include('homework.urls')),
    path('admin/', admin.site.urls),
    path("saveclass/", javiews.saveclass),
    path("savescore/", javiews.savescore),
    path("savegpa/", javiews.savegpa),
    path("api/2/", hwviews.index),
    path("api/2/homeworks", hwviews.homeworks),
    path("api/2/homework/<int:hwid>", hwviews.homework),
    path("api/2/hwcomments/<int:hwid>", hwviews.hwcomment),
    path("api/2/search", cuviews.search),
    path("api/2/course/<int:cuid>/trend", cuviews.trend),
    path("api/2/course/<int:cuid>/distribution", cuviews.distribution),
    path("api/2/course/<int:cuid>/scores", cuviews.scores),
    path("api/2/course/<int:cuid>/overview", cuviews.overview),
    path("api/2/course/<int:cuid>/homeworks", cuviews.homeworks),
    path("api/2/course/<int:cuid>/materials", cuviews.materials),
    path("api/2/course/<int:cuid>/comment", cuviews.comment),
    path("api/2/term/<int:tmid>/gpa", scviews.termgpa),
    path("api/2/term/<int:tmid>/xjf", scviews.termxjf),
    path("api/2/term/<int:tmid>/hxxjf", scviews.termhxxjf),
    path("api/2/gpa/<int:mjid>", scviews.gpa),
    path("api/2/xjf/<int:mjid>", scviews.xjf),
    path("api/2/hxxjf/<int:mjid>", scviews.hxxjf),
    path("api/2/electsys/bx", ecviews.bx),
    path("api/2/xx/<str:ctype>", ecviews.xx),
]
