ARG BUN_VERSION=alpine
FROM oven/bun:$BUN_VERSION

WORKDIR /app

COPY package.json bun.lockb ./
COPY src ./src
COPY public ./public

COPY .eslintrc.json next.config.js postcss.config.js tailwind.config.ts tsconfig.json ./

# COPY install.sh /
# RUN chmod +x /install.sh
# ENTRYPOINT ["/install.sh"]

CMD bun i && bun --bun run dev
