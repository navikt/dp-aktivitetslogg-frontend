FROM europe-north1-docker.pkg.dev/cgr-nav/pull-through/nav.no/node:24@sha256:3b126ec56f3e097bfabe21a6a07e0b2f7632d4c21fd48c85178b175bca7f8aba AS runtime
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
