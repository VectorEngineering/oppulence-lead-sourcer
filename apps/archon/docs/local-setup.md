# Local Development Setup Guide

## Table of Contents

- [Prerequisites](#prerequisites)
- [Initial Setup](#initial-setup)
- [Environment Configuration](#environment-configuration)
- [Database Configuration](#database-configuration)
- [Development Workflow](#development-workflow)
- [Database Management](#database-management)
- [Testing Environment](#testing-environment)
- [External Services](#external-services)
- [Architecture Overview](#architecture-overview)
- [Security Considerations](#security-considerations)
- [Performance Optimization](#performance-optimization)
- [Debugging Guide](#debugging-guide)

## Prerequisites

Before you begin, ensure you have the following installed:

### Required Software

- **Node.js** (v18 or later)

    - Recommended to use nvm for Node.js version management
    - Required for running the Next.js application and build tools

    ```bash
    # Using nvm to install Node.js
    nvm install 18
    nvm use 18
    ```

- **pnpm** (v9.15.3 or later)

    - Used for package management and workspace organization
    - Provides better dependency deduplication and disk space usage

    ```bash
    # Install pnpm globally
    npm install -g pnpm@9.15.3
    ```

- **Docker** and **Docker Compose**

    - Required for running PostgreSQL and other services
    - Ensures consistent development environment
    - Minimum versions:
        - Docker Engine: 20.10.0+
        - Docker Compose: 2.0.0+

- **Git** (2.30.0 or later)
    - Required for version control
    - Configure Git with your credentials:
    ```bash
    git config --global user.name "Your Name"
    git config --global user.email "your.email@example.com"
    ```

### System Requirements

- Minimum 8GB RAM recommended
- 20GB free disk space
- Unix-based OS recommended (macOS or Linux)
- For Windows users, WSL2 is recommended

## Initial Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd lead-management
```

2. Install dependencies:

```bash
# Install all workspace dependencies
pnpm install

# If you encounter any issues, try:
pnpm install --force  # Forces resolution of dependencies
```

3. Set up Git hooks:

```bash
# Install husky for Git hooks
pnpm husky install

# This sets up:
# - pre-commit hooks for linting and formatting
# - pre-push hooks for running tests
```

## Environment Configuration

### Development Environment Variables

Create and configure your environment files:

```bash
# Create local environment file
cp apps/router/.env.example apps/router/.env.local

# Create test environment file
cp apps/router/.env.example apps/router/.env.test
```

Required environment variables:

```env
# Database Configuration
POSTGRES_URL="postgresql://postgres:mypassword@localhost:5434/postgres"
POSTGRES_USER="postgres"
POSTGRES_PASSWORD="mypassword"
POSTGRES_DB="postgres"
POSTGRES_HOST="localhost"
POSTGRES_PORT="5434"

# Authentication (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."
CLERK_WEBHOOK_SECRET="whsec_..."

# Stripe Configuration
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."

# Application Settings
NODE_ENV="development"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Environment-Specific Configurations

The application supports different environments:

- **Development** (`NODE_ENV=development`)

    - Hot reloading enabled
    - Detailed error messages
    - Debug logging
    - Swagger documentation available

- **Testing** (`NODE_ENV=test`)

    - Separate test database
    - Mocked external services
    - Test-specific logging

- **Production** (`NODE_ENV=production`)
    - Optimized builds
    - Error tracking enabled
    - Production logging levels

## Database Configuration

The project uses PostgreSQL with Drizzle ORM for database management.

### Local Database Setup

The database configuration is defined in `docker-compose.yml`:

```yaml
services:
    db:
        image: postgres:latest
        restart: always
        environment:
            POSTGRES_USER: postgres
            POSTGRES_PASSWORD: mypassword
            POSTGRES_DB: postgres
            POSTGRES_HOST: db
            POSTGRES_PORT: 5432
        ports:
            - '5434:5432'
        healthcheck:
            test: ['CMD-SHELL', 'pg_isready -U postgres']
            interval: 10s
            retries: 5
            start_period: 30s
            timeout: 5s
        volumes:
            - db_data:/var/lib/postgresql/data
            - ./db/seed:/docker-entrypoint-initdb.d
        networks:
            - app-network
```

### Database Schema

The database schema is managed using Drizzle ORM and includes:

1. **Users Table**

```typescript
export const users = pgTable('user', {
    id: text('id').primaryKey().notNull(),
    email: text('email').notNull(),
    name: text('name'),
    firstName: text('firstName'),
    lastName: text('lastName')
    // ... other fields
})
```

2. **Endpoints Table**

```typescript
export const endpoints = pgTable('endpoint', {
    id: text('id').primaryKey().notNull(),
    userId: text('userId')
        .notNull()
        .references(() => users.id)
    // ... other fields
})
```

3. **Leads Table**

```typescript
export const leads = pgTable('lead', {
    id: text('id').primaryKey().notNull(),
    endpointId: text('endpointId')
        .notNull()
        .references(() => endpoints.id)
    // ... other fields
})
```

### Database Commands

Comprehensive list of database-related commands:

```bash
# Start the database
pnpm docker:up

# Stop and remove volumes
pnpm docker:down

# Run migrations
pnpm db:migrate

# Generate migration files
pnpm db:generate

# Create database dump
pnpm db:dump

# Access database CLI
docker-compose exec db psql -U postgres

# View database logs
docker-compose logs db

# Reset database (clean slate)
pnpm docker:down && pnpm docker:up && pnpm db:migrate
```

### Database Migrations

Migrations are handled using Drizzle Kit:

1. **Creating Migrations**

```bash
# Generate migration based on schema changes
pnpm db:generate

# This creates files in lib/db/drizzle/
# Example: 0001_initial.sql
```

2. **Migration File Structure**

```sql
-- Example migration file
CREATE TABLE IF NOT EXISTS "user" (
  "id" text PRIMARY KEY NOT NULL,
  "email" text NOT NULL,
  -- ... other columns
);

-- Add indexes
CREATE INDEX IF NOT EXISTS "user_email_idx" ON "user" ("email");
```

3. **Running Migrations**

```bash
# Development environment
pnpm db:migrate

# Test environment
NODE_ENV=test pnpm db:migrate

# Production environment
NODE_ENV=production pnpm db:migrate
```

### Database Dumps and Seeding

The project includes sophisticated database dump and seed functionality:

1. **Creating Database Dumps**

```bash
# Create full database dump
pnpm db:dump

# This creates a seed.sql file containing:
# - Schema definitions
# - Table data
# - Indexes and constraints
# - Custom types and enums
```

2. **Dump File Structure**

```sql
-- Disable triggers
ALTER TABLE IF EXISTS ONLY public.log DROP CONSTRAINT IF EXISTS "log_endpointId_endpoint_id_fk";
-- ... other constraint drops

-- Create types
CREATE TYPE public."logType" AS ENUM ('success', 'error');
-- ... other type definitions

-- Create tables
CREATE TABLE public."user" ( ... );
-- ... other table definitions

-- Insert data
COPY public."user" (id, email, ...) FROM stdin;
-- ... data inserts

-- Restore constraints
ALTER TABLE ONLY public.log
    ADD CONSTRAINT "log_endpointId_endpoint_id_fk"
    FOREIGN KEY ("endpointId") REFERENCES public.endpoint(id);
-- ... other constraint definitions
```

3. **Automatic Seeding**
   The dump file is automatically loaded when starting a fresh database container through Docker volumes:

```yaml
volumes:
    - ./db/seed:/docker-entrypoint-initdb.d
```

4. **Manual Seeding**

```bash
# Reset and reseed database
pnpm docker:down
pnpm docker:up

# Or directly apply seed file
cat db/seed/seed.sql | docker-compose exec -T db psql -U postgres
```

## Development Workflow

### Starting the Development Environment

1. **Full Development Stack**

```bash
# Start everything
pnpm docker:start

# This:
# 1. Starts Docker containers
# 2. Runs database migrations
# 3. Starts Next.js development server
# 4. Enables hot reloading
```

2. **Component Development**

```bash
# Start Storybook for component development
pnpm storybook

# Access Storybook at http://localhost:6006
```

### Development Server Configuration

The development server is configured for optimal developer experience:

```yaml
environment:
    # Enable file system watching
    WATCHPACK_POLLING: 'true'
    CHOKIDAR_USEPOLLING: 'true'

    # Development-specific settings
    NODE_ENV: 'development'
    DEBUG: 'true'
```

### Access Points

- **Web Application**: http://localhost:3000

    - Main application interface
    - Hot reloading enabled
    - Development tools available

- **Database**: localhost:5434

    - Direct PostgreSQL access
    - Use with any PostgreSQL client

- **Drizzle Studio**: http://localhost:4983
    ```bash
    pnpm db:studio
    ```
    - Database visualization
    - Schema browser
    - Data explorer

### Hot Reload Behavior

The development environment supports:

- Hot Module Replacement (HMR)
- Fast Refresh for React components
- CSS/SCSS hot reloading
- TypeScript type checking in watch mode

## Testing Environment

### Unit Testing

The project uses Vitest for unit testing:

```bash
# Run all tests
pnpm test:unit

# Run tests in watch mode
pnpm test:unit --watch

# Run tests with coverage
pnpm test:unit --coverage

# Run specific test file
pnpm test:unit path/to/test.ts
```

### Test Database Configuration

Testing uses a separate database instance:

```env
# .env.test
POSTGRES_URL="postgresql://postgres:mypassword@localhost:5435/postgres_test"
```

```bash
# Setup test database
NODE_ENV=test pnpm db:migrate

# Run tests with database
NODE_ENV=test pnpm test:unit
```

### Integration Testing

Integration tests can be run against the test database:

```bash
# Start test environment
docker-compose -f docker-compose.test.yml up -d

# Run integration tests
pnpm test:integration
```

## External Services

### Ngrok Integration

The project includes Ngrok for exposing your local server:

1. **Configuration**

```bash
# Start Ngrok tunnel
pnpm ngrok

# This creates a tunnel to localhost:3000
# Output includes:
# - Public URL (https://xxxx.ngrok.io)
# - Local dashboard (http://localhost:4040)
```

2. **Use Cases**

- Testing webhooks from external services
- Mobile device testing
- Sharing development instance
- Testing on different networks

3. **Webhook Testing**

```bash
# Start Ngrok
pnpm ngrok

# Update webhook URLs in:
# - Stripe Dashboard
# - Clerk Dashboard
# - Other external services

# Monitor webhooks
open http://localhost:4040
```

### Clerk Authentication

Comprehensive Clerk integration for authentication:

1. **Configuration**

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
CLERK_WEBHOOK_SECRET=whsec_...
```

2. **Features**

- User authentication
- Social login providers
- Email verification
- Two-factor authentication
- Session management

3. **Webhook Handling**

```typescript
// app/api/webhook/clerk/route.ts
export async function POST(req: Request) {
    const payload = await req.json()
    const headerPayload = headers()
    const svixId = headerPayload.get('svix-id')
    const svixTimestamp = headerPayload.get('svix-timestamp')
    const svixSignature = headerPayload.get('svix-signature')

    // Webhook processing logic
}
```

### Stripe Integration

Complete Stripe setup for payments:

1. **Configuration**

```env
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

2. **Features**

- Payment processing
- Subscription management
- Usage-based billing
- Invoice generation

3. **Webhook Handling**

```typescript
// app/api/webhook/stripe/route.ts
export async function POST(req: Request) {
    const payload = await req.text()
    const signature = headers().get('stripe-signature')

    // Verify and process webhook
}
```

## Architecture Overview

### Monorepo Structure

The project follows a monorepo architecture using pnpm workspaces:

```
lead-management/
├── apps/
│   └── router/                 # Main Next.js application
│       ├── app/               # App router components
│       ├── components/        # Shared components
│       ├── lib/              # Utilities and helpers
│       └── public/           # Static assets
├── packages/
│   ├── analytics/            # Analytics package
│   │   ├── src/
│   │   └── package.json
│   ├── config/              # Shared configuration
│   │   ├── src/
│   │   └── package.json
│   └── events/              # Event handling
│       ├── src/
│       └── package.json
├── internal/                # Internal shared packages
│   ├── backend-client/
│   └── config/
├── docs/                    # Documentation
├── scripts/                 # Utility scripts
└── package.json            # Root package.json
```

### Key Technologies

1. **Frontend**

- Next.js 14 (App Router)
- React 19
- TypeScript
- Tailwind CSS

2. **Backend**

- Node.js
- PostgreSQL
- Drizzle ORM
- tRPC (optional)

3. **Testing**

- Vitest
- Testing Library
- Playwright (e2e)

4. **Infrastructure**

- Docker
- Docker Compose
- GitHub Actions

### Data Flow

```mermaid
graph TD
    A[Client] --> B[Next.js App Router]
    B --> C[Server Actions]
    C --> D[Database]
    C --> E[External Services]
    E --> F[Webhooks]
    F --> C
```

## Security Considerations

### Authentication Flow

1. **User Authentication**

```mermaid
sequenceDiagram
    participant U as User
    participant A as App
    participant C as Clerk
    participant D as Database

    U->>A: Access Protected Route
    A->>C: Verify Session
    C->>A: Session Valid
    A->>D: Fetch User Data
    D->>A: User Data
    A->>U: Render Protected Content
```

2. **Security Headers**

```typescript
// middleware.ts
export function middleware(request: NextRequest) {
    const response = NextResponse.next()

    // Add security headers
    response.headers.set('X-Frame-Options', 'DENY')
    response.headers.set('X-Content-Type-Options', 'nosniff')
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

    return response
}
```

### Database Security

1. **Connection Security**

- TLS encryption
- Connection pooling
- Prepared statements

2. **Access Control**

```sql
-- Example of row-level security
ALTER TABLE "user" ENABLE ROW LEVEL SECURITY;

CREATE POLICY user_isolation_policy ON "user"
    USING (id = current_user_id());
```

## Performance Optimization

### Database Optimization

1. **Indexes**

```sql
-- Example indexes
CREATE INDEX user_email_idx ON "user" (email);
CREATE INDEX endpoint_user_id_idx ON endpoint ("userId");
CREATE INDEX lead_endpoint_id_idx ON lead ("endpointId");
```

2. **Query Optimization**

```typescript
// Example of optimized query
const result = await db
    .select({
        id: users.id,
        email: users.email,
        endpointCount: sql`count(${endpoints.id})`
    })
    .from(users)
    .leftJoin(endpoints, eq(endpoints.userId, users.id))
    .groupBy(users.id, users.email)
```

### Caching Strategy

1. **Server-Side Caching**

```typescript
import { unstable_cache } from 'next/cache'

export const getCachedUser = unstable_cache(
    async (id: string) => {
        return await db.query.users.findFirst({
            where: eq(users.id, id)
        })
    },
    ['user'],
    { revalidate: 60 } // Cache for 60 seconds
)
```

2. **Client-Side Caching**

```typescript
// Using SWR for client-side caching
const { data, error } = useSWR('/api/user', fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    dedupingInterval: 60000
})
```

## Debugging Guide

### Common Issues

1. **Database Connection Issues**

```bash
# Check database status
docker-compose ps

# View database logs
docker-compose logs db

# Check connection
docker-compose exec db pg_isready -U postgres
```

2. **Migration Issues**

```bash
# Reset database and migrations
pnpm docker:down
pnpm docker:up
pnpm db:migrate

# View migration status
pnpm drizzle-kit status
```

3. **Docker Issues**

```bash
# Clean Docker environment
pnpm docker:clean

# View Docker logs
docker-compose logs -f

# Rebuild containers
docker-compose up --build
```

### Debugging Tools

1. **Database Debugging**

```bash
# Access database CLI
docker-compose exec db psql -U postgres

# Common debugging queries
SELECT * FROM pg_stat_activity;  -- View active connections
SELECT * FROM pg_locks;         -- View locks
```

2. **Application Debugging**

```bash
# Enable debug logging
DEBUG=* pnpm dev

# Use Chrome DevTools
# Open chrome://inspect in Chrome
NODE_OPTIONS='--inspect' pnpm dev
```

3. **Network Debugging**

```bash
# Monitor network requests
pnpm ngrok http 3000 --log=stdout

# View webhook requests
open http://localhost:4040
```

## Contributing

### Development Process

1. **Branch Naming Convention**

```bash
feat/    # New features
fix/     # Bug fixes
docs/    # Documentation
refactor/# Code refactoring
test/    # Testing
```

2. **Commit Message Format**

```
<type>(<scope>): <subject>

<body>

<footer>
```

Example:

```
feat(auth): implement user registration

- Add registration form
- Implement validation
- Add success feedback

Closes #123
```

3. **Code Quality**

```bash
# Format code
pnpm format

# Check formatting
pnpm format:check

# Run linting
pnpm lint

# Run type checking
pnpm typecheck

# Run all checks
pnpm precommit
```

### Release Process

1. **Version Bump**

```bash
# Update version
pnpm version <patch|minor|major>

# Build project
pnpm build

# Run tests
pnpm test:unit
```

2. **Deployment Checklist**

- [ ] All tests passing
- [ ] Documentation updated
- [ ] Change log updated
- [ ] Version bumped
- [ ] Dependencies updated
- [ ] Database migrations tested
- [ ] Environment variables documented

## Additional Resources

### Documentation

- [Drizzle ORM Documentation](https://orm.drizzle.team)
- [Next.js Documentation](https://nextjs.org/docs)
- [Clerk Documentation](https://clerk.dev/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

### Tools

- [Drizzle Studio](https://orm.drizzle.team/drizzle-studio/overview)
- [Ngrok Dashboard](https://dashboard.ngrok.com)
- [Clerk Dashboard](https://dashboard.clerk.dev)
- [Stripe Dashboard](https://dashboard.stripe.com)

### Community

- [GitHub Discussions](https://github.com/your-repo/discussions)
- [Discord Community](https://discord.gg/your-community)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/your-project)
