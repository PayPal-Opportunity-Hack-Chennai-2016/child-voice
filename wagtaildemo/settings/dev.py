from .base import *

DEBUG = True

EMAIL_BACKEND = 'django.core.mail.backends.dummy.EmailBackend'

# BASE_URL required for notification emails
BASE_URL = 'http://localhost:8000'

try:
    from .local import *
except ImportError:
    pass
