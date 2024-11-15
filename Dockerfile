# Base image with Node.js 22 for running the production app
FROM node:20

WORKDIR /prompt_oven_fe

# Copy package.json and pnpm-lock.yaml files for all apps
COPY package.json pnpm-lock.yaml ./
COPY apps/client/package.json apps/client/pnpm-lock.yaml ./apps/client/
COPY apps/admin/package.json apps/admin/pnpm-lock.yaml ./apps/admin/

# Install pnpm and runtime dependencies
RUN npm install -g pnpm@9.12.2 && pnpm install

# Copy source files for all apps
COPY . .

# Build the apps
RUN pnpm turbo run build

# Expose the necessary ports
EXPOSE 3000
EXPOSE 3001

# Start both applications
CMD ["sh", "-c", "pnpm --filter client start & pnpm --filter admin start"]