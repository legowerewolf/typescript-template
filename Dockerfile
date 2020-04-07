FROM node:13.12.0 AS builder
WORKDIR /project/
COPY . .
RUN npm ci
RUN npm run build
RUN npm prune --production
ENTRYPOINT [ "npm", "start" ]