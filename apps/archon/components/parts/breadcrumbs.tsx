'use client'

import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Breadcrumbs({ pageName, isLoading }: { pageName: string; isLoading?: boolean }) {
    const pathname = usePathname()
    const paths = pathname.split('/').filter(Boolean)

    if (paths.length === 0 && isLoading) {
        return (
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbPage>{pageName}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        )
    }

    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <Link href='/' className='text-muted-foreground hover:text-foreground'>
                        Dashboard
                    </Link>
                </BreadcrumbItem>
                {paths.map((path, index) => {
                    const href = `/${paths.slice(0, index + 1).join('/')}`
                    const isLast = index === paths.length - 1
                    const label = path.charAt(0).toUpperCase() + path.slice(1)

                    return (
                        <BreadcrumbItem key={path}>
                            <BreadcrumbSeparator />
                            {isLast ? (
                                <BreadcrumbPage>{label}</BreadcrumbPage>
                            ) : (
                                <Link href={href} className='text-muted-foreground hover:text-foreground'>
                                    {label}
                                </Link>
                            )}
                        </BreadcrumbItem>
                    )
                })}
            </BreadcrumbList>
        </Breadcrumb>
    )
}
