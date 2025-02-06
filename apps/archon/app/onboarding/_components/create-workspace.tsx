'use client'

import { updateUserMetadata } from '@/app/actions/users/update-user-metadata-action'
import { addWorkspace } from '@/app/actions/workspaces/add-workspace-action'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAction } from 'next-safe-action/hooks'
import { useState } from 'react'
import { toast } from 'sonner'

interface CreateWorkspaceProps {
    onComplete: (workspaceId: string) => void
}

export function CreateWorkspace({ onComplete }: CreateWorkspaceProps) {
    const [isUpdating, setIsUpdating] = useState(false)
    const { execute: executeUpdateMetadata } = useAction(updateUserMetadata)

    const { execute, status } = useAction(addWorkspace, {
        onSuccess: async (result) => {
            console.log('Add workspace result', { result })
            if (!result.data) return

            if ('workspace' in result.data) {
                await executeUpdateMetadata({
                    data: { hasWorkspace: true }
                })

                toast.success(isUpdating ? 'Workspace updated successfully' : 'Workspace created successfully')

                onComplete(result.data.workspace?.id || '')
            } else if ('error' in result.data) {
                toast.error(result.data.error)
            }
        },
        onError: (error) => {
            toast.error(error?.error?.serverError || 'Failed to save workspace')
        }
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const name = formData.get('name') as string
        const description = formData.get('description') as string

        await execute({ name, description })
    }

    return (
        <div className='min-w-[50%] space-y-6'>
            <div>
                <h1 className='text-2xl font-semibold tracking-tight'>{isUpdating ? 'Update your workspace' : 'Create a workspace'}</h1>
                <p className='text-muted-foreground text-sm'>
                    {isUpdating
                        ? 'Update your workspace settings to better reflect your team.'
                        : 'Create a workspace to manage your team and projects.'}
                </p>
            </div>

            <form onSubmit={handleSubmit} className='space-y-4'>
                <div className='space-y-2'>
                    <Label htmlFor='name'>Workspace name</Label>
                    <Input id='name' name='name' placeholder='Acme Corp' required />
                </div>

                <div className='space-y-2'>
                    <Label htmlFor='workspace-url'>Workspace URL</Label>
                    <div className='flex'>
                        <div className='rounded-l-md border border-r-0 bg-gray-50 px-5 py-2 text-sm text-gray-500'>workspace/</div>
                        <Input id='description' name='description' placeholder='your-workspace' className='rounded-l-none' />
                    </div>
                    <p className='text-sm text-gray-500'>Choose a URL for your workspace or use the auto-generated one</p>
                </div>

                <Button type='submit' disabled={status === 'executing'}>
                    {status === 'executing'
                        ? isUpdating
                            ? 'Updating...'
                            : 'Creating...'
                        : isUpdating
                          ? 'Update Workspace'
                          : 'Create Workspace'}
                </Button>
            </form>
        </div>
    )
}
