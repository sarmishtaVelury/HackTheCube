from django.conf import settings
from django.conf.urls import include, url
from django.conf.urls.static import static
from django.contrib import admin
from cube import views


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^index/', views.index),
]
