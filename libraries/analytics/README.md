# @playbookmedia/analytics

A comprehensive analytics integration package for Next.js applications, supporting PostHog, Google Analytics, and Vercel Analytics.

## Features

- 🔄 **Multiple Providers**: Integrated support for PostHog, Google Analytics, and Vercel Analytics
- 🎯 **Type-safe**: Built with TypeScript for robust type checking
- 🌐 **Universal**: Works on both client and server-side
- ⚡ **Performance Optimized**: Lazy-loaded analytics providers
- 🔒 **Privacy-focused**: Configurable tracking options

## Installation

```bash
# Using pnpm (recommended)
pnpm add @playbookmedia/analytics

# Using npm
npm install @playbookmedia/analytics

# Using yarn
yarn add @playbookmedia/analytics
```

## Quick Start

1. Set up your environment variables:

```env
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
NEXT_PUBLIC_POSTHOG_HOST=your_posthog_host
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_id
```

2. Wrap your application with the AnalyticsProvider:

```tsx
import { AnalyticsProvider } from '@playbookmedia/analytics'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AnalyticsProvider>
          {children}
        </AnalyticsProvider>
      </body>
    </html>
  )
}
```

## Components

### AnalyticsProvider

The main provider component that initializes all analytics services.

```tsx
import { AnalyticsProvider } from '@playbookmedia/analytics'

<AnalyticsProvider>
  {/* Your app content */}
</AnalyticsProvider>
```

## Server-Side Analytics

For server-side tracking, use the PostHog server client:

```typescript
import { analytics } from '@playbookmedia/analytics/posthog/server'

// Track an event
await analytics.capture({
  distinctId: 'user-id',
  event: 'server_event',
  properties: {
    key: 'value'
  }
})
```

## Client-Side Analytics

For client-side tracking, use the PostHog client:

```typescript
import { analytics } from '@playbookmedia/analytics/posthog/client'

// Track an event
analytics.capture('client_event', {
  key: 'value'
})
```

## Configuration

### PostHog Configuration

PostHog is configured with the following defaults:

```typescript
{
  api_host: '/ingest',
  person_profiles: 'identified_only',
  capture_pageview: false, // Manual pageview capture
  capture_pageleave: true
}
```

### Google Analytics

Google Analytics is automatically disabled in development and only loads when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set.

### Vercel Analytics

Vercel Analytics is included by default and requires no additional configuration.

## TypeScript Support

This package is written in TypeScript and includes full type definitions:

```typescript
import type { PostHog } from 'posthog-js'
import type { ReactNode } from 'react'

interface AnalyticsProviderProps {
  readonly children: ReactNode
}
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT © [Playbook Media](https://github.com/playbookmedia)

## Related

- [PostHog](https://posthog.com)
- [Google Analytics](https://analytics.google.com)
- [Vercel Analytics](https://vercel.com/analytics) 