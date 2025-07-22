ARG NODE_IMAGE=node:lts-alpine
FROM $NODE_IMAGE as base
WORKDIR /src

# Build
FROM base as build
COPY --link package.json package-lock.json .
#COPY --link package.json .
#RUN npm install
RUN npm ci --prefer-offline
COPY --link . .
RUN npm run build

# Run
FROM base
ARG PORT=3000
ARG NODE_ENV=development
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=$PORT
ENV NODE_ENV=$NODE_ENV
EXPOSE $NUXT_PORT
COPY --from=build /src/.output /src/.output
# Optional, only needed if you rely on unbundled dependencies
# COPY --from=build /src/node_modules /src/node_modules
CMD [ "node", ".output/server/index.mjs" ]
