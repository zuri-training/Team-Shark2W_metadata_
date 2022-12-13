from django.conf.urls import url
from django.urls import path, include
from .views import (
    ProfileListApiView,
)

urlpatterns = [
    path('api', ProfileListApiView.as_view()),
]