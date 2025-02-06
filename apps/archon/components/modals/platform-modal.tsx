'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { HelpCircle, Search } from 'lucide-react'
import { useCallback, useMemo, useState } from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

/**
 * Section configuration for the platform modal
 * @interface PlatformSection
 */
interface PlatformSection {
    /** The display title of the section */
    title: string
    /** React node representing the section's icon */
    icon: React.ReactNode
    /** The content to be displayed when this section is active */
    content: React.ReactNode
}

/**
 * Props for the PlatformModal component
 * @interface PlatformModalProps
 */
interface PlatformModalProps {
    /** Controls the visibility of the modal */
    isOpen: boolean
    /** Callback function to handle modal close events */
    onClose: () => void
    /** The title displayed in the modal header */
    title: string
    /** Optional children elements */
    children?: React.ReactNode
    /** Array of sections to be displayed in the modal */
    sections: PlatformSection[]
    /** The currently active section title */
    activeSection: string
    /** Callback function to handle section changes */
    onSectionChange: (title: string) => void
}

/**
 * PlatformModal Component
 *
 * A comprehensive modal component that provides a platform-like interface with
 * navigation sidebar, search functionality, and content areas.
 *
 * @component
 * @example
 * ```tsx
 * <PlatformModal
 *   isOpen={true}
 *   onClose={() => setIsOpen(false)}
 *   title="Platform"
 *   sections={sections}
 *   activeSection="Home"
 *   onSectionChange={handleSectionChange}
 * />
 * ```
 */
export function PlatformModal({ isOpen, onClose, title, children, sections, activeSection, onSectionChange }: PlatformModalProps) {
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value)
    }, [])

    const filteredSections = useMemo(() => {
        if (!searchQuery) return sections
        return sections.filter((section) => section.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [sections, searchQuery])

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent
                className='from-background to-background/50 flex h-[85vh] max-h-[900px] w-[90vw] max-w-[1400px] flex-col gap-0 overflow-hidden rounded-2xl border-none bg-gradient-to-b p-0 shadow-2xl backdrop-blur-xl'
                aria-label='Platform interface'
            >
                {/* Header Section */}
                <DialogHeader className='border-border/20 relative border-b px-6 py-4'>
                    <div className='flex items-center justify-between p-[2%]'>
                        <DialogTitle className='from-foreground to-foreground/70 bg-gradient-to-br bg-clip-text text-2xl font-semibold text-transparent'>
                            {title}
                        </DialogTitle>
                        <div className='flex items-center gap-4'>
                            {/* Search Input */}
                            <div className='group relative w-64 transition-all duration-300 hover:w-72'>
                                <Search
                                    className='text-muted-foreground group-focus-within:text-primary absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transition-colors'
                                    aria-hidden='true'
                                />
                                <input
                                    type='text'
                                    placeholder='Search sections...'
                                    value={searchQuery}
                                    onChange={handleSearch}
                                    className='border-input bg-background/50 ring-offset-background placeholder:text-muted-foreground/50 focus-visible:ring-ring focus-visible:bg-background h-9 w-full rounded-full border px-9 text-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2'
                                    aria-label='Search sections'
                                />
                            </div>
                            {/* Help Button */}
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant='ghost'
                                        size='icon'
                                        className='hover:bg-background h-9 w-9 rounded-full transition-colors'
                                        aria-label='Help and keyboard shortcuts'
                                    >
                                        <HelpCircle className='h-4 w-4' />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className='w-[320px] p-0 shadow-xl' align='end' sideOffset={8}>
                                    <div className='relative overflow-hidden rounded-md'>
                                        {/* Header with gradient background */}
                                        <div className='bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 p-4 dark:from-neutral-800 dark:to-neutral-900'>
                                            <h3 className='bg-gradient-to-r from-white to-white/70 bg-clip-text text-lg font-semibold text-transparent'>
                                                Keyboard Shortcuts
                                            </h3>
                                            <p className='mt-1 text-sm text-neutral-400'>Quick access to platform sections</p>
                                        </div>

                                        {/* Shortcuts Section */}
                                        <div className='bg-white p-3 dark:bg-neutral-950'>
                                            <div className='space-y-0.5'>
                                                {sections.map((section, index) => (
                                                    <div
                                                        key={section.title}
                                                        className='flex items-center justify-between rounded-lg p-2 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900'
                                                    >
                                                        <div className='flex items-center gap-3'>
                                                            <div className='flex h-6 w-6 items-center justify-center rounded-md bg-neutral-100 dark:bg-neutral-900'>
                                                                {section.icon}
                                                            </div>
                                                            <span className='text-sm font-medium'>{section.title}</span>
                                                        </div>
                                                        <kbd className='flex h-6 items-center justify-center rounded-md bg-neutral-100 px-2 font-mono text-[11px] font-medium text-neutral-600 shadow-sm dark:bg-neutral-900 dark:text-neutral-400'>
                                                            ⌘{index + 1}
                                                        </kbd>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                </DialogHeader>

                {/* Main Content Area */}
                <div className='flex flex-1 overflow-hidden'>
                    {/* Navigation Sidebar */}
                    <aside className='border-border/10 bg-background/50 flex w-64 flex-col border-r backdrop-blur-sm'>
                        <nav className='scrollbar-none flex-1 overflow-auto px-3 py-4' aria-label='Platform sections'>
                            <div className='space-y-0.5'>
                                {filteredSections.map((section) => (
                                    <button
                                        type='button'
                                        key={section.title}
                                        onClick={() => onSectionChange(section.title)}
                                        className={cn(
                                            'group relative flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm transition-all duration-200',
                                            activeSection === section.title
                                                ? 'from-primary/90 to-primary text-primary-foreground dark:from-primary/70 dark:to-primary/90 bg-gradient-to-r font-medium shadow-lg'
                                                : 'text-muted-foreground hover:from-primary/5 hover:to-primary/10 hover:text-foreground hover:bg-gradient-to-r',
                                            'after:absolute after:right-3 after:top-1/2 after:-translate-y-1/2 after:opacity-0 after:transition-all after:duration-200',
                                            activeSection === section.title && 'after:opacity-100'
                                        )}
                                        aria-current={activeSection === section.title ? 'page' : undefined}
                                    >
                                        <div
                                            className={cn(
                                                'flex h-6 w-6 items-center justify-center rounded-lg transition-all duration-200',
                                                activeSection === section.title
                                                    ? 'text-primary-foreground bg-white/5'
                                                    : 'bg-muted/50 text-muted-foreground group-hover:bg-primary/10 group-hover:text-foreground'
                                            )}
                                        >
                                            {section.icon}
                                        </div>
                                        <div className='flex flex-col items-start'>
                                            <span className='line-clamp-1 font-medium'>{section.title}</span>
                                            <span
                                                className={cn(
                                                    'text-xs transition-all',
                                                    activeSection === section.title
                                                        ? 'text-primary-foreground/70'
                                                        : 'text-muted-foreground group-hover:text-foreground/70'
                                                )}
                                            >
                                                {`Press ⌘${filteredSections.indexOf(section) + 1}`}
                                            </span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </nav>
                        {/* Footer */}
                        <footer className='border-border/10 from-background/50 to-background/80 border-t bg-gradient-to-b px-4 py-4'>
                            <div className='flex items-center justify-between'>
                                <div className='flex flex-col'>
                                    <span className='text-xs font-medium'>Platform</span>
                                    <span className='text-muted-foreground text-[10px]'>v1.0.0</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <div className='h-2 w-2 rounded-full bg-green-500 shadow-lg shadow-green-500/20' />
                                    <span className='text-muted-foreground text-[10px]'>Connected</span>
                                </div>
                            </div>
                        </footer>
                    </aside>

                    {/* Content Display Area */}
                    <main className='bg-background/50 relative flex flex-1 flex-col overflow-hidden'>
                        <div className='flex-1 overflow-auto'>
                            <div className='h-full p-6'>{sections.find((s) => s.title === activeSection)?.content}</div>
                        </div>
                        {/* Keyboard Shortcuts Bar */}
                        <div className='border-border/20 bg-background/50 border-t px-4 py-2'>
                            <div className='flex items-center justify-center gap-3 text-xs'>
                                <span className='text-muted-foreground font-medium'>Shortcuts</span>
                                <div className='flex flex-wrap gap-3'>
                                    {sections.map((section, index) => (
                                        <div key={section.title} className='flex items-center gap-1.5'>
                                            <kbd className='bg-background text-muted-foreground flex h-5 min-w-[1.25rem] items-center justify-center rounded-md border px-1.5 font-mono text-[10px] font-medium shadow-sm'>
                                                ⌘{index + 1}
                                            </kbd>
                                            <span className='text-muted-foreground'>{section.title}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </DialogContent>
        </Dialog>
    )
}
