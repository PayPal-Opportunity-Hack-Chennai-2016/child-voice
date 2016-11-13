from .base import *

DEBUG = True

# EMAIL SETTINGS
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_INBOX = 'childvoiceindiaorg@gmail.com'
EMAIL_PORT = 587
EMAIL_HOST_USER = 'childvoiceindiaorg@gmail.com'
print os.environ['EMAIL_PASS']
EMAIL_HOST_PASSWORD = os.environ['EMAIL_HOST_PASSWORD']
EMAIL_USE_TLS = True
DEFAULT_FROM_EMAIL = 'childvoiceindiaorg@gmail.com'
EMAIL_BACKEND = 'django.core.mail.backends.dummy.EmailBackend'

# BASE_URL required for notification emails
BASE_URL = 'http://localhost:8000'

try:
    from .local import *
except ImportError:
    pass
