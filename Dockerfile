FROM node:18-alpine as development

RUN corepack enable

WORKDIR /app

COPY package.json .
COPY pnpm-lock.yaml .

RUN pnpm install

COPY . .

RUN pnpm build

FROM node:18-alpine as production

RUN corepack enable

WORKDIR /app

COPY package.json .
COPY pnpm-lock.yaml .

RUN pnpm install --prod

COPY --from=development /app/dist /app/dist

ENTRYPOINT [ "pnpm", "start:prod" ]
