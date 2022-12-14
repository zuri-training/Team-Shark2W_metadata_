from rest_framework import serializers
from .models import metadoc

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = metadoc
        fields = ["user", 'files']