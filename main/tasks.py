"""Tasks for the Huey task queue."""

from huey import crontab
from huey.contrib.djhuey import periodic_task, task


# An example task
@task()
def send_lots_of_emails() -> None:
    """Example task that sends a lot of emails."""
    for _ in range(1000):
        send_an_email()  # type: ignore # noqa: F821


# An example periodic task
@periodic_task(crontab(minute="*/10"))
def clean_up() -> None:
    """Example periodic task that runs every 10 minutes."""
    run_clean_up()  # type: ignore # noqa: F821
