// biome-ignore lint/style/useImportType: <explanation>
import React from 'react'

type HeaderProps = {
    title: string
    children?: React.ReactNode
}

export const Header: React.FC<HeaderProps> = ({ title, children }) => {
    return (
        <section className='mb-6 flex items-center gap-2 border-b pb-4 text-lg font-light'>
            <h1 className='font-normal'>{title}</h1>
            {children && <h3 className='text-muted-foreground'>: {children}</h3>}
        </section>
    )
}
