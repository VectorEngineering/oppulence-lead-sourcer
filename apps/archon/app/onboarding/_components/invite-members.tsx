'use client'

import { Plus, X } from 'lucide-react'

import { inviteMember } from '@/app/actions/workspaces/invite-member-action'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAction } from 'next-safe-action/hooks'
import { useState } from 'react'
import { toast } from 'sonner'

interface EmailField {
    id: string
    value: string
}

interface InviteMembersProps {
    workspaceId: string
    onComplete: () => void
}

export function InviteMembers({ workspaceId, onComplete }: InviteMembersProps) {
    const [emailFields, setEmailFields] = useState<EmailField[]>([{ id: crypto.randomUUID(), value: '' }])
    const [isSubmitting, setIsSubmitting] = useState(false)

    const { execute } = useAction(inviteMember, {
        onSuccess: () => {
            toast.success('Invitation sent successfully')
        },
        onError: (error) => {
            toast.error(error?.error?.serverError || 'Failed to send invitation')
        }
    })

    const addEmailField = () => {
        setEmailFields([...emailFields, { id: crypto.randomUUID(), value: '' }])
    }

    const removeEmailField = (id: string) => {
        if (emailFields.length > 1) {
            setEmailFields(emailFields.filter((field) => field.id !== id))
        }
    }

    const updateEmail = (id: string, value: string) => {
        setEmailFields(emailFields.map((field) => (field.id === id ? { ...field, value } : field)))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            // Filter out empty emails and send invitations
            const validEmails = emailFields.map((field) => field.value.trim()).filter((email) => email !== '')

            // Send invitations sequentially
            for (const email of validEmails) {
                await execute({ workspaceId, email })
            }

            onComplete()
        } catch (error) {
            console.error('Error sending invitations:', error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className='space-y-6'>
            <div>
                <h1 className='text-2xl font-semibold tracking-tight'>Invite your team</h1>
                <p className='text-muted-foreground text-sm'>Invite team members to collaborate in your workspace.</p>
            </div>

            <form onSubmit={handleSubmit} className='space-y-4'>
                {emailFields.map((field, index) => (
                    <div key={field.id} className='flex gap-2'>
                        <Input
                            type='email'
                            placeholder='teammate@company.com'
                            value={field.value}
                            onChange={(e) => updateEmail(field.id, e.target.value)}
                            required={index === 0}
                        />
                        {index > 0 && (
                            <Button type='button' variant='ghost' size='icon' onClick={() => removeEmailField(field.id)}>
                                <X className='h-4 w-4' />
                            </Button>
                        )}
                    </div>
                ))}

                <div className='flex items-center gap-2'>
                    <Button type='button' variant='outline' size='sm' className='flex items-center gap-2' onClick={addEmailField}>
                        <Plus className='h-4 w-4' />
                        Add another
                    </Button>
                </div>

                <div className='flex justify-between pt-4'>
                    <Button type='button' variant='ghost' onClick={onComplete}>
                        Skip for now
                    </Button>
                    <Button type='submit' disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Send Invitations'}
                    </Button>
                </div>
            </form>
        </div>
    )
}
