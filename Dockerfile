FROM europe-north1-docker.pkg.dev/cgr-nav/pull-through/nav.no/node:24@sha256:0c8cdae2ad501c2f32660b0cddd13568e3da13698f719ff2e97c8ff3115502b0 AS runtime
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
