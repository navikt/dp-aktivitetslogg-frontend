FROM europe-north1-docker.pkg.dev/cgr-nav/pull-through/nav.no/node:24@sha256:ee95625296aa53d5594bd04f67c09d8e08a0945802296eb042726ffd889ab474 AS runtime
WORKDIR /usr/src/app

ENV PORT=3000 \
    NODE_ENV=production \
    TZ=Europe/Oslo \
    HOSTNAME=0.0.0.0

COPY next.config.js ./
COPY package.json ./

COPY public ./public
COPY .next/standalone ./
COPY .next/static ./.next/static

EXPOSE 3000

CMD ["server.js"]
