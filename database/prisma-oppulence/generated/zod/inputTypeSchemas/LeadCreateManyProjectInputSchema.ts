import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadSourceSchema } from './LeadSourceSchema'
import { LeadStageSchema } from './LeadStageSchema'
import { LeadVerificationStatusSchema } from './LeadVerificationStatusSchema'
import { LeadPrioritySchema } from './LeadPrioritySchema'
import { LeadCategoryTagSchema } from './LeadCategoryTagSchema'

export const LeadCreateManyProjectInputSchema: z.ZodType<Prisma.LeadCreateManyProjectInput> = z
    .object({
        id: z.string().cuid().optional(),
        name: z.string(),
        description: z.string().optional().nullable(),
        note: z.string().optional().nullable(),
        internalNotes: z.string().optional().nullable(),
        reference: z.string().optional().nullable(),
        amount: z.number(),
        probability: z.number().optional().nullable(),
        weightedAmount: z.number().optional().nullable(),
        actualAmount: z.number().optional().nullable(),
        leadSource: z.lazy(() => LeadSourceSchema).optional(),
        stage: z.lazy(() => LeadStageSchema).optional(),
        verificationStatus: z.lazy(() => LeadVerificationStatusSchema).optional(),
        priority: z.lazy(() => LeadPrioritySchema).optional(),
        categoryTag: z
            .lazy(() => LeadCategoryTagSchema)
            .optional()
            .nullable(),
        closeDate: z.coerce.date().optional().nullable(),
        nextFollowUp: z.coerce.date().optional().nullable(),
        lastContactDate: z.coerce.date().optional().nullable(),
        contactName: z.string().optional().nullable(),
        contactEmail: z.string().optional().nullable(),
        contactPhone: z.string().optional().nullable(),
        contactTitle: z.string().optional().nullable(),
        company: z.string().optional().nullable(),
        industry: z.string().optional().nullable(),
        pipelineStage: z.string().optional().nullable(),
        salesRep: z.string().optional().nullable(),
        territory: z.string().optional().nullable(),
        winReason: z.string().optional().nullable(),
        lossReason: z.string().optional().nullable(),
        date: z.coerce.date(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        archivedAt: z.coerce.date().optional().nullable(),
        convertedAt: z.coerce.date().optional().nullable(),
        qualifiedAt: z.coerce.date().optional().nullable(),
        closedAt: z.coerce.date().optional().nullable(),
        lastActivity: z.string().optional().nullable(),
        nextAction: z.string().optional().nullable(),
        followUpStatus: z.string().optional().nullable(),
        engagementScore: z.number().optional().nullable(),
        assignedId: z.string().optional().nullable(),
        createdBy: z.string().optional().nullable(),
        updatedBy: z.string().optional().nullable(),
        dataConsent: z.boolean().optional(),
        dataRetention: z.coerce.date().optional().nullable(),
        externalId: z.string().optional().nullable(),
        syncStatus: z.string().optional().nullable(),
        lastSyncedAt: z.coerce.date().optional().nullable()
    })
    .strict()

export default LeadCreateManyProjectInputSchema
