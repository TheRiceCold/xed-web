FROM oven/bun:latest

WORKDIR /app

COPY package.json ./
RUN bun install

COPY src ./src
COPY public ./public
COPY amplify ./amplify
COPY .eslintrc.json .graphqlconfig.yml next.config.js postcss.config.js tailwind.config.ts tsconfig.json .

# Install prerequisites
# RUN apt-get update && apt-get install -y \
# curl xdg-utils

# Install AWS Amplify CLI
# RUN curl -sL https://aws-amplify.github.io/amplify-cli/install | bash && $SHELL

CMD ["bun", "dev"]
