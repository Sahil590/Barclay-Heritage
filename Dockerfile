FROM python:3.11.4-alpine3.18 as python

ADD requirements.txt /
RUN pip install -r /requirements.txt
EXPOSE 8000
COPY --chown=nobody . /usr/src/app
WORKDIR /usr/src/app
USER nobody
RUN python manage.py collectstatic --no-input