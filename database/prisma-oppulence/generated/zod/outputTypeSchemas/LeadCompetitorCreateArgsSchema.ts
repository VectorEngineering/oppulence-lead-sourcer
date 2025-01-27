import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadCompetitorIncludeSchema } from '../inputTypeSchemas/LeadCompetitorIncludeSchema'
import { LeadCompetitorCreateInputSchema } from '../inputTypeSchemas/LeadCompetitorCreateInputSchema'
import { LeadCompetitorUncheckedCreateInputSchema } from '../inputTypeSchemas/LeadCompetitorUncheckedCreateInputSchema'
import { LeadArgsSchema } from './LeadArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadCompetitorSelectSchema: z.ZodType<Prisma.LeadCompetitorSelect> = z
    .object({
        id: z.boolean().optional(),
        leadId: z.boolean().optional(),
        name: z.boolean().optional(),
        strengths: z.boolean().optional(),
        weaknesses: z.boolean().optional(),
        pricing: z.boolean().optional(),
        differentiator: z.boolean().optional(),
        status: z.boolean().optional(),
        lead: z.union([z.boolean(), z.lazy(() => LeadArgsSchema)]).optional()
    })
    .strict()

export const LeadCompetitorCreateArgsSchema: z.ZodType<Prisma.LeadCompetitorCreateArgs> = z
    .object({
        select: LeadCompetitorSelectSchema.optional(),
        include: LeadCompetitorIncludeSchema.optional(),
        data: z.union([LeadCompetitorCreateInputSchema, LeadCompetitorUncheckedCreateInputSchema])
    })
    .strict()

export default LeadCompetitorCreateArgsSchema
