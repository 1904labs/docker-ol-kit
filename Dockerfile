FROM nginx:1.18-alpine

# Build Args
ARG BUILD_DATE=None
ARG VCS_REF=None
ARG BUILD_VERSION=None

# Labels.
LABEL maintainer="gjunge@1904labs.com" \
      org.label-schema.schema-version="1.0" \
      org.label-schema.build-date=${BUILD_DATE} \
      org.label-schema.name="1904labs/ol-kit" \
      org.label-schema.description="1904labs ol-kit image" \
      org.label-schema.url="https://1904labs.com/" \
      org.label-schema.vcs-url="https://github.com/1904labs/docker-ol-kit" \
      org.label-schema.vcs-ref=${VCS_REF} \
      org.label-schema.vendor="1904labs" \
      org.label-schema.version=${BUILD_VERSION} \
      org.label-schema.docker.cmd="docker run -p 8000:80 -d 1904labs/ol-kit:latest"

RUN set -ex && \
    apk add --update --no-cache bash nodejs npm

COPY ./app /opt/app
WORKDIR /opt/app

RUN set -ex && \
    npm ci && \
    npm run build && \
    apk del npm && \
    mv /opt/app/build/* /usr/share/nginx/html/

WORKDIR  /usr/share/nginx/html

# set this env variable to point to a geoserver url to add a wfs layer
ENV REACT_APP_GEOSERVER=
ENV REACT_APP_WFS_URL=
