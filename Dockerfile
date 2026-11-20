FROM europe-north1-docker.pkg.dev/cgr-nav/pull-through/nav.no/node:26@sha256:667fea2112c49afcd3450dd5b9dcf22e8fa4bbba195cc10c6404bc03f37cd11e AS runtime
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
