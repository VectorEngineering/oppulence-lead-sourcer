#!/bin/bash

# Exit on error
set -e

# Function to check if we're in a git repository
check_git_repo() {
    if ! git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
        echo "Error: Not in a git repository"
        exit 1
    fi
}

# Function to check and save current branch
get_current_branch() {
    current_branch=$(git symbolic-ref --short HEAD)
    if [ -z "$current_branch" ]; then
        echo "Error: Not on any branch"
        exit 1
    fi
    echo "Current branch: $current_branch"
}

# Function to check for uncommitted changes
check_clean_state() {
    if ! git diff-index --quiet HEAD --; then
        echo "Error: You have uncommitted changes. Please commit or stash them first."
        exit 1
    fi
}

# Function to check remote repositories
check_remote() {
    echo "Checking remote repositories..."
    git remote -v
}

# Function to add upstream if it doesn't exist
add_upstream() {
    echo "Checking for upstream remote..."
    if ! git remote | grep -q "upstream"; then
        echo "Adding upstream remote..."
        git remote add upstream git@github.com:FlowiseAI/Flowise.git
        echo "Upstream remote added successfully"
    else
        echo "Upstream remote already exists"
    fi
}

# Function to fetch and rebase from upstream main branch
update_from_template() {
    echo "Fetching latest changes from upstream..."
    git fetch upstream main

    echo "Rebasing current branch onto upstream/main..."
    if ! git rebase upstream/main; then
        echo "Error: Rebase failed. Aborting rebase and restoring original state..."
        git rebase --abort
        exit 1
    fi
}

# Main execution
echo "Starting upstream sync process..."
check_git_repo
get_current_branch
check_clean_state
check_remote
add_upstream
update_from_template
echo "Sync process completed successfully"