from .base import *

DATABASES={

   'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'portfolio',
        'USER': 'postgres',
        'PASSWORD': 'x',
        'HOST': 'localhost',
        'PORT': '5432',

    }
}
