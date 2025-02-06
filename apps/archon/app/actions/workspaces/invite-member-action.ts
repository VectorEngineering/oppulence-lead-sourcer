'use server'

import { authenticatedAction } from '@/app/actions/safe-action'
import { BusinessConfig } from '@dub/platform-config'
import { prisma } from '@dub/prisma-archon'
import { randomBytes } from 'node:crypto'
import { Resend } from 'resend'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

const inviteMemberSchema = z.object({
    workspaceId: z.string(),
    email: z.string().email('Invalid email address')
})

export const inviteMember = authenticatedAction
    .metadata({
        name: 'invite-member'
    })
    .schema(inviteMemberSchema)
    .action(async ({ parsedInput, ctx: { userId } }) => {
        try {
            // 1. Verify workspace exists and user has permission
            const workspace = await prisma.workspace.findUnique({
                where: {
                    id: parsedInput.workspaceId
                }
            })

            if (!workspace) {
                return {
                    success: false,
                    error: 'Workspace not found'
                }
            }

            if (workspace.ownerId !== userId) {
                return {
                    success: false,
                    error: "You don't have permission to invite members"
                }
            }

            // 2. Generate invitation token
            const token = randomBytes(32).toString('hex')
            const expiresAt = new Date()
            expiresAt.setDate(expiresAt.getDate() + 7) // expires in 7 days

            // 3. Insert the new workspace invitation (MySQL doesn't support `.returning()`)
            const insertResult = await prisma.workspaceInvitation.create({
                data: {
                    workspaceId: parsedInput.workspaceId,
                    email: parsedInput.email,
                    token,
                    expiresAt
                }
            })

            // If needed, fetch the newly inserted record
            // Drizzle MySQL returns { insertId, rowsAffected }.
            const insertedId = insertResult.id
            if (!insertedId) {
                return {
                    success: false,
                    error: 'Failed to create invitation'
                }
            }

            // Optional: retrieve the newly created row for logging or further use
            const invitation = await prisma.workspaceInvitation.findUnique({
                where: {
                    id: insertedId
                }
            })

            // 4. Send invitation email
            const inviteUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/join-workspace?token=${token}`

            await resend.emails.send({
                from: `${BusinessConfig.name} <noreply@${BusinessConfig.platformUrl}>`,
                to: parsedInput.email,
                subject: `You've been invited to join ${workspace.name} on ${BusinessConfig.name}`,
                html: `
          <p>You've been invited to join ${workspace.name} on ${BusinessConfig.name}.</p>
          <p>Click the link below to accept the invitation:</p>
          <a href="${inviteUrl}">${inviteUrl}</a>
          <p>This invitation will expire in 7 days.</p>
        `
            })

            return { success: true }
        } catch (error) {
            console.error('❌ Error in inviteMember:', error)
            return {
                success: false,
                error: 'Failed to send invitation'
            }
        }
    })
