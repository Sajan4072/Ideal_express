from ast import mod
from http.client import USE_PROXY
from tkinter import CASCADE
from django.db import models

# Create your models here.

from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,


)


class CustomUserManager(BaseUserManager):
    '''
    Custom user model manager where email is the unique identifiers
    for authentication instead of usernames.
    
    '''

    def create_user(self,username,email,password,branch,post,**kwargs):
        """Create and return a `User` with an email, username and password."""
        if username is None:
            raise TypeError("Users must have a username.")
        if email is None:
            raise TypeError("Users must have an email.")
        
        if branch is None:
            raise TypeError("Users must have an branch.")
        if post is None:
            raise TypeError("Users must have an post.")
        if password is None:
            raise TypeError("Users must have an password.")
        user=self.model(username=username,email=self.normalize_email(email))
        user=self.model(branch=branch)
        user=self.model(post=post)
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, username, email, password):
        """
        Create and return a `User` with superuser (admin) permissions.
        """
        if password is None:
            raise TypeError("Superusers must have a password.")
        if email is None:
            raise TypeError("Superusers must have an email.")
        if username is None:
            raise TypeError("Superusers must have an username.")

        user = self.create_user(username, email, password)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)

        return user

class Post(models.Model):
    post=models.CharField(max_length=200)

    def __str__(self):
        return f"{self.post}"

class Branch(models.Model):
    branch=models.CharField(max_length=200)

    def __str__(self):
        return f"{self.branch}" 

        
class User(AbstractBaseUser,PermissionsMixin):
    username = models.CharField(db_index=True, max_length=255)
    email = models.EmailField(db_index=True, unique=True)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    branch=models.ForeignKey(Branch,on_delete=models.CASCADE)
    post=models.ForeignKey(Post,on_delete=models.CASCADE)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username","post","password","branch"]

    objects = CustomUserManager()

    def __str__(self):
        return f"{self.email}"


   