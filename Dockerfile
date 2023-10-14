FROM oven/bun:latest

WORKDIR /app

COPY package.json ./
RUN bun install

COPY src ./src
COPY public ./public
COPY next.config.js tsconfig.json .

CMD ["bun", "dev"]
