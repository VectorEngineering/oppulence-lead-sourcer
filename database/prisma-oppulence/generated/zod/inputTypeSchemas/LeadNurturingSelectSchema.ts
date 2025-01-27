import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadArgsSchema } from '../outputTypeSchemas/LeadArgsSchema'

export const LeadNurturingSelectSchema: z.ZodType<Prisma.LeadNurturingSelect> = z
    .object({
        id: z.boolean().optional(),
        leadId: z.boolean().optional(),
        program: z.boolean().optional(),
        stage: z.boolean().optional(),
        status: z.boolean().optional(),
        contentViewed: z.boolean().optional(),
        emailsOpened: z.boolean().optional(),
        websiteVisits: z.boolean().optional(),
        engagementScore: z.boolean().optional(),
        responseRate: z.boolean().optional(),
        lastEngagement: z.boolean().optional(),
        currentStep: z.boolean().optional(),
        completedSteps: z.boolean().optional(),
        nextActions: z.boolean().optional(),
        automationFlows: z.boolean().optional(),
        triggers: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        lead: z.union([z.boolean(), z.lazy(() => LeadArgsSchema)]).optional()
    })
    .strict()

export default LeadNurturingSelectSchema
