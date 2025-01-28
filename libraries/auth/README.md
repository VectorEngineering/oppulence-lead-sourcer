# @playbookmedia/auth

A Next.js authentication package built on top of Clerk, providing seamless authentication with customizable UI components.

## Features

- 🔐 **Secure Authentication**: Built on Clerk's robust authentication system
- 🎨 **Theme Integration**: Seamless integration with your app's theme system
- 🎯 **Type-safe**: Full TypeScript support
- 🎭 **Customizable**: Extensive styling and behavior customization options
- 🌓 **Dark Mode**: Automatic dark mode support

## Installation

```bash
# Using pnpm (recommended)
pnpm add @playbookmedia/auth

# Using npm
npm install @playbookmedia/auth

# Using yarn
yarn add @playbookmedia/auth
```

## Quick Start

1. Set up your Clerk environment variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
```

2. Wrap your application with the AuthProvider:

```tsx
// app/layout.tsx
import { AuthProvider } from '@playbookmedia/auth'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
```

3. Add authentication middleware:

```ts
// middleware.ts
import { authMiddleware } from '@playbookmedia/auth/middleware'

export default authMiddleware({
  publicRoutes: ['/']
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']
}
```

## Components

### SignIn

```tsx
import { SignIn } from '@playbookmedia/auth/components'

export default function SignInPage() {
  return <SignIn />
}
```

### SignUp

```tsx
import { SignUp } from '@playbookmedia/auth/components'

export default function SignUpPage() {
  return <SignUp />
}
```

## Customization

### Theme Customization

The AuthProvider automatically integrates with your app's theme using `next-themes`. You can further customize the appearance:

```tsx
import { AuthProvider } from '@playbookmedia/auth'
import type { Theme } from '@clerk/types'

const customAppearance: Partial<Theme> = {
  variables: {
    colorPrimary: '#0070f3',
    fontFamily: 'Inter, system-ui'
  },
  elements: {
    formButtonPrimary: 'bg-blue-500 hover:bg-blue-600',
    card: 'shadow-lg'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider customAppearance={customAppearance}>
      {children}
    </AuthProvider>
  )
}
```

### Server-Side Usage

For server components and API routes:

```tsx
import { auth } from '@playbookmedia/auth/server'

export default async function Page() {
  const { userId } = auth()
  
  if (!userId) {
    redirect('/sign-in')
  }
  
  return <div>Protected Content</div>
}
```

### Client-Side Usage

For client components:

```tsx
'use client'

import { useAuth } from '@playbookmedia/auth/client'

export default function UserProfile() {
  const { user } = useAuth()
  
  if (!user) return null
  
  return <div>Welcome, {user.firstName}!</div>
}
```

## TypeScript Support

This package includes comprehensive TypeScript definitions:

```typescript
import type { AuthProviderProps } from '@playbookmedia/auth'
import type { Theme } from '@clerk/types'

// Available types
interface AuthProviderProps {
  customAppearance?: Partial<Theme>
  children: React.ReactNode
}
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT © [Playbook Media](https://github.com/playbookmedia)

## Related

- [Clerk](https://clerk.com)
- [Next.js](https://nextjs.org)
- [next-themes](https://github.com/pacocoursey/next-themes) 