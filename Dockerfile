FROM europe-north1-docker.pkg.dev/cgr-nav/pull-through/nav.no/node:26@sha256:813b4cb2c6d9fa79f5898b061e9eaa423e22c80f027af770f3c87ac7b710dda8 AS runtime
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
