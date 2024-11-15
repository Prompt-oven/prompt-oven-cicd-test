FROM node:22

WORKDIR /app

RUN npm install -g pnpm@9.12.3

COPY . .

RUN pnpm install

RUN pnpm turbo build

CMD pnpm -F=web start


# Base image with Node.js 22 for running the production app
FROM node:20

WORKDIR /prompt_oven_fe

# Install pnpm and runtime dependencies
RUN npm install -g pnpm@9.12.2

# Copy source files for all apps
COPY . .

RUN pnpm install

# Build the apps
RUN pnpm turbo build

# Expose the necessary ports
EXPOSE 3000
EXPOSE 3001

# Start both applications
CMD ["sh", "-c", "pnpm --filter client start & pnpm --filter admin start"]