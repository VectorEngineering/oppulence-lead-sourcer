'use client'

import * as React from 'react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/ui/sidebar'
import { ChevronsUpDown, Plus } from 'lucide-react'

import { getUserWorkspaces } from '@/app/actions/workspaces/get-user-workspaces-action'
import { CreateWorkspaceDialog } from '@/components/dialogs/create-workspace-dialog'
import { useWorkspace } from '@/components/providers/workspace-provider'

export function TeamSwitcher() {
    const { isMobile } = useSidebar()
    const [isDialogOpen, setIsDialogOpen] = React.useState(false)
    const { activeWorkspace, workspaces, setActiveWorkspace } = useWorkspace()

    const refreshWorkspaces = React.useCallback(async () => {
        const result = await getUserWorkspaces()
        if (result?.data?.success) {
            // The WorkspaceProvider will handle updating the store
        }
    }, [])

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size='lg'
                            className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground group transition-colors'
                        >
                            {/* Team Avatar */}
                            <div className='bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg shadow-sm ring-1 ring-zinc-900/5'>
                                <div className='size-4 shrink-0' />
                            </div>

                            {/* Team Info */}
                            <div className='grid flex-1 gap-1 text-left text-sm'>
                                <span className='truncate font-medium'>{activeWorkspace?.name ?? 'Select Team'}</span>
                            </div>

                            {/* Dropdown Icon */}
                            <ChevronsUpDown className='ml-auto size-4 opacity-50 transition-transform group-data-[state=open]:rotate-180' />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                        className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg'
                        align='start'
                        side={isMobile ? 'bottom' : 'right'}
                        sideOffset={4}
                    >
                        <DropdownMenuLabel className='text-muted-foreground text-xs font-normal'>Workspaces</DropdownMenuLabel>

                        {/* Workspace List */}
                        {workspaces.map((workspace, index) => (
                            <DropdownMenuItem
                                key={workspace.id}
                                onClick={() => setActiveWorkspace(workspace)}
                                className='flex items-center gap-2 p-2'
                            >
                                <div className='flex size-6 items-center justify-center rounded-sm border bg-zinc-50'>
                                    <div className='size-4 shrink-0' />
                                </div>
                                <span className='flex-1 truncate'>{workspace.name}</span>
                                <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        ))}

                        <DropdownMenuSeparator />

                        {/* Add Team Button */}
                        <CreateWorkspaceDialog
                            trigger={
                                <DropdownMenuItem
                                    className='flex items-center gap-2 p-2'
                                    onSelect={(e) => {
                                        e.preventDefault()
                                    }}
                                >
                                    <div className='bg-background flex size-6 items-center justify-center rounded-md border'>
                                        <Plus className='size-4' />
                                    </div>
                                    <span className='text-muted-foreground font-medium'>Add Workspace</span>
                                </DropdownMenuItem>
                            }
                            open={isDialogOpen}
                            onOpenChange={setIsDialogOpen}
                            onSuccess={refreshWorkspaces}
                        />
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}
