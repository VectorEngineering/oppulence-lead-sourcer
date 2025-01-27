import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadFeedbackIncludeSchema } from '../inputTypeSchemas/LeadFeedbackIncludeSchema'
import { LeadFeedbackWhereUniqueInputSchema } from '../inputTypeSchemas/LeadFeedbackWhereUniqueInputSchema'
import { LeadArgsSchema } from './LeadArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadFeedbackSelectSchema: z.ZodType<Prisma.LeadFeedbackSelect> = z
    .object({
        id: z.boolean().optional(),
        leadId: z.boolean().optional(),
        type: z.boolean().optional(),
        source: z.boolean().optional(),
        content: z.boolean().optional(),
        sentiment: z.boolean().optional(),
        score: z.boolean().optional(),
        category: z.boolean().optional(),
        subCategory: z.boolean().optional(),
        tags: z.boolean().optional(),
        requiresFollowUp: z.boolean().optional(),
        followUpAssignee: z.boolean().optional(),
        followUpStatus: z.boolean().optional(),
        followUpNotes: z.boolean().optional(),
        status: z.boolean().optional(),
        resolution: z.boolean().optional(),
        resolvedBy: z.boolean().optional(),
        resolvedAt: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        lead: z.union([z.boolean(), z.lazy(() => LeadArgsSchema)]).optional()
    })
    .strict()

export const LeadFeedbackFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.LeadFeedbackFindUniqueOrThrowArgs> = z
    .object({
        select: LeadFeedbackSelectSchema.optional(),
        include: LeadFeedbackIncludeSchema.optional(),
        where: LeadFeedbackWhereUniqueInputSchema
    })
    .strict()

export default LeadFeedbackFindUniqueOrThrowArgsSchema
