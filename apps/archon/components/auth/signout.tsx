'use client'

import { useWorkspaceCleanup } from '@/hooks/use-workspace-cleanup'
import { useAuth } from '@clerk/nextjs'

export default function SignOut({ children }: { children: React.ReactNode }) {
    const { signOut } = useAuth()
    const { handleSignOut } = useWorkspaceCleanup()

    return (
        // biome-ignore lint/a11y/useButtonType: <explanation>
        <button
            className='w-full'
            onClick={() => {
                handleSignOut()
                signOut({
                    redirectUrl: '/login'
                })
            }}
        >
            {children}
        </button>
    )
}
