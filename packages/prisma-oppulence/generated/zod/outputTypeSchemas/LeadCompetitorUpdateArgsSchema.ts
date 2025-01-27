import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadCompetitorIncludeSchema } from '../inputTypeSchemas/LeadCompetitorIncludeSchema'
import { LeadCompetitorUpdateInputSchema } from '../inputTypeSchemas/LeadCompetitorUpdateInputSchema'
import { LeadCompetitorUncheckedUpdateInputSchema } from '../inputTypeSchemas/LeadCompetitorUncheckedUpdateInputSchema'
import { LeadCompetitorWhereUniqueInputSchema } from '../inputTypeSchemas/LeadCompetitorWhereUniqueInputSchema'
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

export const LeadCompetitorUpdateArgsSchema: z.ZodType<Prisma.LeadCompetitorUpdateArgs> = z
    .object({
        select: LeadCompetitorSelectSchema.optional(),
        include: LeadCompetitorIncludeSchema.optional(),
        data: z.union([LeadCompetitorUpdateInputSchema, LeadCompetitorUncheckedUpdateInputSchema]),
        where: LeadCompetitorWhereUniqueInputSchema
    })
    .strict()

export default LeadCompetitorUpdateArgsSchema
