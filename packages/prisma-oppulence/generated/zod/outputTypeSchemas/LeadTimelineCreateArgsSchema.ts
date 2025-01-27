import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadTimelineIncludeSchema } from '../inputTypeSchemas/LeadTimelineIncludeSchema'
import { LeadTimelineCreateInputSchema } from '../inputTypeSchemas/LeadTimelineCreateInputSchema'
import { LeadTimelineUncheckedCreateInputSchema } from '../inputTypeSchemas/LeadTimelineUncheckedCreateInputSchema'
import { LeadArgsSchema } from './LeadArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadTimelineSelectSchema: z.ZodType<Prisma.LeadTimelineSelect> = z
    .object({
        id: z.boolean().optional(),
        leadId: z.boolean().optional(),
        milestone: z.boolean().optional(),
        targetDate: z.boolean().optional(),
        actualDate: z.boolean().optional(),
        status: z.boolean().optional(),
        notes: z.boolean().optional(),
        lead: z.union([z.boolean(), z.lazy(() => LeadArgsSchema)]).optional()
    })
    .strict()

export const LeadTimelineCreateArgsSchema: z.ZodType<Prisma.LeadTimelineCreateArgs> = z
    .object({
        select: LeadTimelineSelectSchema.optional(),
        include: LeadTimelineIncludeSchema.optional(),
        data: z.union([LeadTimelineCreateInputSchema, LeadTimelineUncheckedCreateInputSchema])
    })
    .strict()

export default LeadTimelineCreateArgsSchema
