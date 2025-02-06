# run directly from the repo root directory
# docker build -f ./docs/oppulence-docs/Dockerfile ./docs/oppulence-docs
FROM node:20-alpine AS base

WORKDIR /app

# Install Mintlify using npm
RUN npm install -g mintlify@latest

# Copy documentation files
COPY . .

# Documentation is served on port 3000
EXPOSE 3000

# Run Documentation with explicit JSON array format
CMD ["mintlify", "dev"]