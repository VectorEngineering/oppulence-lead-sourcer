.PHONY: build run dev clean stop

# Docker image names
IMAGE_NAME = archon-docs
DEV_IMAGE_NAME = $(IMAGE_NAME)-dev
CONTAINER_NAME = $(IMAGE_NAME)-container
DEV_CONTAINER_NAME = $(IMAGE_NAME)-dev-container

# Build the production Docker image
build:
	docker build -t $(IMAGE_NAME) -f Dockerfile .

# Run the production Docker container
run:
	docker run --rm --name $(CONTAINER_NAME) -p 3000:3000 -v $(PWD):/app $(IMAGE_NAME)

# Build and run the development Docker container
dev:
	docker build -t $(DEV_IMAGE_NAME) -f Dockerfile.dev .
	docker run --rm --name $(DEV_CONTAINER_NAME) -p 3000:3000 -v $(PWD):/app $(DEV_IMAGE_NAME)

# Stop running containers
stop:
	-docker stop $(CONTAINER_NAME) 2>/dev/null || true
	-docker stop $(DEV_CONTAINER_NAME) 2>/dev/null || true

# Clean up containers and images
clean: stop
	-docker rm $(CONTAINER_NAME) 2>/dev/null || true
	-docker rm $(DEV_CONTAINER_NAME) 2>/dev/null || true
	-docker rmi $(IMAGE_NAME) 2>/dev/null || true
	-docker rmi $(DEV_IMAGE_NAME) 2>/dev/null || true

# Help command to display available commands
help:
	@echo "Available commands:"
	@echo "  make build    - Build the production Docker image"
	@echo "  make run      - Run the production Docker container"
	@echo "  make dev      - Build and run the development Docker container"
	@echo "  make stop     - Stop running containers"
	@echo "  make clean    - Clean up containers and images" 