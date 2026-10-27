FROM europe-north1-docker.pkg.dev/cgr-nav/pull-through/nav.no/node:24@sha256:290f942a1288057a28c192eb5d44eb4738901a49a4ccb2b0d9e447c1a744c7a7 AS runtime
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
