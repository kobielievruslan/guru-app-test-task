# Dockerfile at root of Turborepo
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Enable Corepack for pnpm
RUN corepack enable && corepack prepare pnpm@10.23.0 --activate

# Copy only lockfile + root configs for dependency caching
COPY package.json pnpm-lock.yaml turbo.json ./

# Copy package.json for each app to allow pnpm to install workspace deps
COPY apps/bff/package.json apps/bff/
COPY apps/frontend/package.json apps/frontend/

# Install dependencies for the entire workspace
ENV CI=true
RUN pnpm install --frozen-lockfile

# Copy the rest of the project
COPY . .

# Default command: start Turbo dev server
CMD ["pnpm", "dev"]