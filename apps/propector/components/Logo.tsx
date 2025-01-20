import Link from 'next/link'
import React from 'react'
import { SquareDashedMousePointer } from 'lucide-react'
import { cn } from '@/lib/utils'

function Logo({ fontSize = 'text-2xl', iconSize = 20 }: { fontSize?: string; iconSize?: number }) {
    return (
        <Link href='/' className={cn('text-2xl font-extrabold flex items-center gap-2', fontSize)}>
            <div className='rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 p-2'>
                <SquareDashedMousePointer size={iconSize} className='stroke-white' />
            </div>
            <div>
                <span className='bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent text-md'>Vector</span>
            </div>
        </Link>
    )
}

export default Logo
