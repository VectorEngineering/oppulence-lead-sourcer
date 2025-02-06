'use client'

import { DataTableColumnHeader } from '@/components/data-table/header'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BusinessConfig } from '@dub/platform-config'
import type { Endpoint } from '@dub/prisma-archon/client'
import type { ColumnDef } from '@tanstack/react-table'
import { File } from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'
import OptionsDropdown from './options-dropdown'

export const columns: ColumnDef<Endpoint>[] = [
    {
        accessorKey: 'name',
        header: ({ column }) => {
            return <DataTableColumnHeader column={column} title='Name' />
        },
        cell: ({ row }) => {
            const name: string = row.getValue('name')
            return (
                <Button asChild type='button' variant='link' className='group px-0 text-sm'>
                    <Link href={`/portal/endpoints/${row.original.id}`}>
                        {name} <File className='ml-2 h-4 w-4 opacity-5 transition-all group-hover:opacity-100' />
                    </Link>
                </Button>
            )
        }
    },
    {
        accessorKey: 'leads',
        header: ({ column }) => {
            return <DataTableColumnHeader column={column} title='Leads' />
        },
        cell: ({ row }) => {
            const id: string = row.original.id
            return (
                <Button asChild size='sm'>
                    <Link href={`/portal/endpoints/${id}/leads`}>View Leads</Link>
                </Button>
            )
        },
        enableSorting: false
    },
    {
        accessorKey: 'id',
        header: ({ column }) => {
            return <DataTableColumnHeader column={column} title='ID' />
        },
        cell: ({ row }) => {
            const id: string = row.getValue('id')
            return (
                <Link href={`/portal/endpoints/${row.original.id}`}>
                    <span className='text-muted-foreground text-sm' /> {id}
                </Link>
            )
        }
    },
    {
        accessorKey: 'endpointUrl',
        header: ({ column }) => {
            return <DataTableColumnHeader column={column} title='Endpoint URL' />
        },
        cell: ({ row }) => {
            const id: string = row.getValue('id')
            return (
                <Button
                    variant='outline'
                    size='sm'
                    onClick={() => {
                        navigator.clipboard.writeText(`${BusinessConfig.platformUrl}/api/endpoints/${id}`)
                        toast.success('Endpoint Copied')
                    }}
                >
                    {`${BusinessConfig.platformUrl}/api/endpoints/${id}`}
                </Button>
            )
        }
    },
    {
        accessorKey: 'enabled',
        header: ({ column }) => {
            return <DataTableColumnHeader column={column} title='Posting' />
        },
        cell: ({ row }) => {
            const enabled: boolean = row.getValue('enabled')
            return <Badge variant={enabled ? 'outline' : 'secondary'}>{enabled ? 'enabled' : 'disabled'}</Badge>
        }
    },
    {
        accessorKey: 'webhookEnabled',
        header: ({ column }) => {
            return <DataTableColumnHeader column={column} title='Webhook' />
        },
        cell: ({ row }) => {
            const enabled: boolean = row.getValue('webhookEnabled')
            return <Badge variant={enabled ? 'outline' : 'secondary'}>{enabled ? 'enabled' : 'disabled'}</Badge>
        }
    },
    {
        accessorKey: 'options',
        header: ({ column }) => {
            return <DataTableColumnHeader column={column} title='Options' />
        },
        cell: ({ row }) => {
            const id: string = row.original.id
            const enabled: boolean = row.getValue('enabled')
            return <OptionsDropdown id={id} enabled={enabled} />
        },
        enableSorting: false
    }
]
