'use client'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

import { deleteEndpoint } from '@/app/actions/endpoints/delete-endpoint-action'
import { parseActionError } from '@/app/actions/safe-action'
import { Button } from '@/components/ui/button'
import { MoreHorizontal } from 'lucide-react'
import { useAction } from 'next-safe-action/hooks'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

interface OptionsDropdownProps {
    id: string
    enabled: boolean
}

const OptionsDropdown = ({ id, enabled }: OptionsDropdownProps) => {
    const router = useRouter()

    const { execute } = useAction(deleteEndpoint, {
        onSuccess() {
            toast.success('Endpoint deleted successfully.')
            router.refresh()
        },
        onError({ error }) {
            toast.error(parseActionError(error))
        }
    })

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild disabled={!enabled}>
                <Button variant='ghost' className='h-8 w-8 p-0'>
                    <span className='sr-only'>Open menu</span>
                    <MoreHorizontal className='h-4 w-4' />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
                <DropdownMenuItem className='text-destructive' onClick={() => execute({ id })}>
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

// Add display name
OptionsDropdown.displayName = 'OptionsDropdown'

export default OptionsDropdown
