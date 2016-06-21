from django.conf.urls import include,patterns, url
from blog import views

from blog.views import BlogViewSet
from rest_framework import routers

router=routers.SimpleRouter()
router.register(r'blogs',BlogViewSet)


urlpatterns = patterns('',
 #   url(r'^$', views.index, name='index'),
   url(r'', include(router.urls)),

)