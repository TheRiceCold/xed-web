ARG BUN_VERSION=alpine
FROM oven/bun:$BUN_VERSION

WORKDIR /app
COPY src ./src

COPY public ./public
COPY package.json bun.lockb .
COPY tsconfig.json .eslintrc.json next.config.js postcss.config.js tailwind.config.ts . 

# If you want to use amplify CLI inside the container
# docker exec -it xed_web /bin/sh
RUN apk update
RUN apk add --no-cache --update \
    libc6-compat libstdc++ \
    nodejs npm

RUN npm install -g @aws-amplify/cli

# COPY install.sh /
# RUN chmod +x /install.sh
# ENTRYPOINT ["/install.sh"]

CMD bun i && bun --bun run dev
