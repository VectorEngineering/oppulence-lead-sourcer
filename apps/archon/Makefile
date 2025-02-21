# Makefile for Archon - Small Business Spend Management Platform

# Variables
DOCKER_COMPOSE = docker-compose
DOCKER = docker
NODE = pnpm
APP_NAME = archon
DOCKER_IMAGE = vector/$(APP_NAME)
DOCKER_TAG ?= latest
DOCKER_REGISTRY ?= ghcr.io
FULL_IMAGE_NAME = $(DOCKER_REGISTRY)/vector/$(APP_NAME)
ENV_FILE = .env
CONTAINER_NAME = $(APP_NAME)-app
DOCKER_NETWORK = vector-network

# Development Ports
DEV_PORT = 3000
STORYBOOK_PORT = 6006

# Colors for terminal output
CYAN = \033[0;36m
GREEN = \033[0;32m
YELLOW = \033[0;33m
RED = \033[0;31m
NC = \033[0m # No Color

.PHONY: help install dev build test lint clean docker-* deploy

# Display help information
help:
	@echo "$(CYAN)Archon - Small Business Spend Management Platform$(NC)"
	@echo "$(CYAN)Available commands:$(NC)"
	@echo "  $(GREEN)install$(NC)       - Install dependencies"
	@echo "  $(GREEN)dev$(NC)           - Start development server"
	@echo "  $(GREEN)build$(NC)         - Build the application"
	@echo "  $(GREEN)test$(NC)          - Run tests"
	@echo "  $(GREEN)lint$(NC)          - Run linter"
	@echo "  $(GREEN)clean$(NC)         - Clean build artifacts"
	@echo "  $(GREEN)docker-build$(NC)  - Build Docker image"
	@echo "  $(GREEN)docker-run$(NC)    - Run application in Docker"
	@echo "  $(GREEN)docker-stop$(NC)   - Stop Docker containers"
	@echo "  $(GREEN)deploy$(NC)        - Deploy application"
	@echo "  $(GREEN)storybook$(NC)     - Run Storybook"
	@echo "  $(GREEN)type-check$(NC)    - Run TypeScript type checking"
	@echo "  $(GREEN)docker-build-dev$(NC)  - Build Docker development image"
	@echo "  $(GREEN)docker-build-prod$(NC) - Build Docker production image"
	@echo "  $(GREEN)docker-push$(NC)      - Push Docker image to registry"
	@echo "  $(GREEN)docker-pull$(NC)      - Pull Docker image from registry"
	@echo "  $(GREEN)docker-prune$(NC)     - Clean up Docker resources"
	@echo "  $(GREEN)docker-logs$(NC)      - View Docker container logs"
	@echo "  $(GREEN)docker-shell$(NC)     - Open shell in Docker container"
	@echo "  $(GREEN)docker-network$(NC)   - Create Docker network"

# Install dependencies
install:
	@echo "$(YELLOW)Installing dependencies...$(NC)"
	$(NODE) install
	@echo "$(GREEN)Dependencies installed successfully$(NC)"

# Start development server
dev: install
	@echo "$(YELLOW)Starting development server...$(NC)"
	$(NODE) run dev

# Build the application
build:
	@echo "$(YELLOW)Building application...$(NC)"
	$(NODE) run build
	@echo "$(GREEN)Build completed successfully$(NC)"

# Run tests
test:
	@echo "$(YELLOW)Running tests...$(NC)"
	$(NODE) run test

# Run linter
lint:
	@echo "$(YELLOW)Running linter...$(NC)"
	$(NODE) run lint
	@echo "$(YELLOW)Running format check...$(NC)"
	$(NODE) run format:check

# Clean build artifacts
clean:
	@echo "$(YELLOW)Cleaning build artifacts...$(NC)"
	rm -rf .next
	rm -rf .turbo
	rm -rf node_modules
	rm -f tsconfig.tsbuildinfo
	@echo "$(GREEN)Clean completed$(NC)"

# Docker commands
docker-build:
	@echo "$(YELLOW)Building Docker image...$(NC)"
	$(DOCKER) build -t $(DOCKER_IMAGE) .
	@echo "$(GREEN)Docker image built successfully$(NC)"

docker-run:
	@echo "$(YELLOW)Starting Docker containers...$(NC)"
	$(DOCKER_COMPOSE) up -d
	@echo "$(GREEN)Docker containers started$(NC)"

docker-stop:
	@echo "$(YELLOW)Stopping Docker containers...$(NC)"
	$(DOCKER_COMPOSE) down
	@echo "$(GREEN)Docker containers stopped$(NC)"

# Deploy application
deploy:
	@echo "$(YELLOW)Deploying application...$(NC)"
	$(NODE) run build
	@echo "$(GREEN)Deployment completed$(NC)"

# Run Storybook
storybook:
	@echo "$(YELLOW)Starting Storybook...$(NC)"
	$(NODE) run storybook

# Type checking
type-check:
	@echo "$(YELLOW)Running type check...$(NC)"
	$(NODE) run type-check

# Development workflow
dev-workflow: install lint test build