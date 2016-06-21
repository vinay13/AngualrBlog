from rest_framework import viewsets,filters
from rest_framework.response import Response
from blog.models import Blog
from blog.serializers import BlogSerializer
from django.shortcuts import render_to_response, get_object_or_404

"""
def index(request):
    return render_to_response('blog/index.html', {
        #'blog': get_object_or_404(Blog)
    })

"""


class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
#    filter_backends = (filters.DjangoFilterBackend,)
#    filter_fields = ('email',)









# Create your views here.
