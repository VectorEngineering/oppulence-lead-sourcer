FROM node:20-slim

WORKDIR /app

# Install system dependencies including Python and build tools
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    gcc \
    g++ \
    && rm -rf /var/lib/apt/lists/*

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy workspace configuration
COPY pnpm-workspace.yaml ./
COPY package.json ./

# Copy packages
COPY packages/ ./packages/
COPY internal/ ./internal/

# Copy the app
COPY apps/router/ ./apps/router/

# Set workdir to the router app
WORKDIR /app/apps/router

# Install dependencies
RUN pnpm install

# Generate Drizzle migrations
RUN pnpm db:generate

EXPOSE 3000

# Start the application
CMD ["pnpm", "docker-dev"]