FROM oven/bun:latest

WORKDIR /app

COPY package.json ./
RUN bun install

COPY src ./src
COPY public ./public
COPY amplify ./amplify
COPY .eslintrc.json next.config.js postcss.config.js tailwind.config.ts tsconfig.json ./

CMD ["bun", "--bun", "run", "dev"]
