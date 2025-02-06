import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { currentUser } from '@clerk/nextjs/server'
import { ArrowUp } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import SignOut from './signout'

interface AccountWidgetProps {
    plan?: 'free' | 'lite' | 'pro' | 'business' | 'enterprise'
}

export default async function AccountWidget({ plan, userId }: AccountWidgetProps & { userId?: string }) {
    const user = await currentUser()
    if (!user) return

    const showUpgrade = plan === 'free' || plan === 'lite'

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button asChild className='text-foreground w-full items-start px-2 hover:no-underline' variant='link'>
                    <div className='group flex flex-col items-start'>
                        <p>Account Information</p>
                        <p className='text-muted-foreground text-xs'>{user?.emailAddresses[0].emailAddress}</p>
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side='top'>
                <DropdownMenuLabel className='text-xs'>{user?.emailAddresses[0].emailAddress}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {showUpgrade && (
                    <>
                        <DropdownMenuItem asChild className='p-0'>
                            <Link
                                href='/upgrade'
                                className='flex w-full items-center gap-2 p-2 text-green-500 hover:bg-green-500/15 hover:text-green-500'
                            >
                                <ArrowUp className='h-4 w-4' />
                                <div className='grid gap-0.5'>
                                    <span className='font-medium'>Upgrade Plan</span>
                                    <span className='text-muted-foreground text-xs'>Capture more leads</span>
                                </div>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                    </>
                )}
                <SignOut>
                    <DropdownMenuItem className='cursor-pointer'>Log out</DropdownMenuItem>
                </SignOut>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
