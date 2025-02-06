'use client'

import * as React from 'react'

import { getUserWorkspaces } from '@/app/actions/workspaces/get-user-workspaces-action'
import { useWorkspaceStore } from '@/lib/stores/workspace-store'
import type { Workspace } from '@dub/prisma-archon/client'

interface WorkspaceProviderProps {
    children: React.ReactNode
}

interface WorkspaceContextValue {
    activeWorkspace: Workspace | null
    workspaces: Workspace[]
    setActiveWorkspace: (workspace: Workspace | null) => void
    isLoading: boolean
    error: Error | null
}

const WorkspaceContext = React.createContext<WorkspaceContextValue | undefined>(undefined)

export function WorkspaceProvider({ children }: WorkspaceProviderProps) {
    const [isLoading, setIsLoading] = React.useState(true)
    const [error, setError] = React.useState<Error | null>(null)
    const { activeWorkspace, workspaces, setActiveWorkspace, setWorkspaces, clearWorkspaceState } = useWorkspaceStore()

    // Fetch workspaces on mount
    React.useEffect(() => {
        const fetchWorkspaces = async () => {
            try {
                setIsLoading(true)
                const result = await getUserWorkspaces()

                if (!result) {
                    throw new Error('Failed to fetch workspaces')
                }

                if (result.data?.success) {
                    setWorkspaces(result.data.workspaces as Workspace[])
                } else {
                    throw new Error(result.data?.error || 'Failed to fetch workspaces')
                }
            } catch (err) {
                setError(err instanceof Error ? err : new Error('Failed to fetch workspaces'))
                clearWorkspaceState()
            } finally {
                setIsLoading(false)
            }
        }

        fetchWorkspaces()
    }, [setWorkspaces, clearWorkspaceState])

    const value = React.useMemo(
        () => ({
            activeWorkspace,
            workspaces,
            setActiveWorkspace,
            isLoading,
            error
        }),
        [activeWorkspace, workspaces, setActiveWorkspace, isLoading, error]
    )

    return <WorkspaceContext.Provider value={value}>{children}</WorkspaceContext.Provider>
}

export function useWorkspace() {
    const context = React.useContext(WorkspaceContext)
    if (context === undefined) {
        throw new Error('useWorkspace must be used within a WorkspaceProvider')
    }
    return context
}
