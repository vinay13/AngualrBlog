from rest_framework import viewsets
from rest_framework.response import Response
from blog.models import Blog
from blog.serializers import BlogSerializer





class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer










# Create your views here.
