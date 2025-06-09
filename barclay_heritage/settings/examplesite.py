"""THIS FILE SHOULD NOT BE INCLUDED IN YOUR PROJECT.

This file is included in this demo as an example and should not be under version control


in your project. The settings here are specific to a particular deploment and may vary.


When running in production you'd set the environment variable


DJANGO_SETTINGS_MODULE=myproject.settings.examplesite


"""

from ._production import *  # noqa: F401, F403

ADMINS = [("Christopher Cave-Ayland", "c.cave-ayland@imperial.ac.uk")]


ALLOWED_HOSTS = ["examplesite.com"]
