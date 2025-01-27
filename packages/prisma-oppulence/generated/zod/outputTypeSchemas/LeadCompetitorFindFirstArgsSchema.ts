import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadCompetitorIncludeSchema } from '../inputTypeSchemas/LeadCompetitorIncludeSchema'
import { LeadCompetitorWhereInputSchema } from '../inputTypeSchemas/LeadCompetitorWhereInputSchema'
import { LeadCompetitorOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadCompetitorOrderByWithRelationInputSchema'
import { LeadCompetitorWhereUniqueInputSchema } from '../inputTypeSchemas/LeadCompetitorWhereUniqueInputSchema'
import { LeadCompetitorScalarFieldEnumSchema } from '../inputTypeSchemas/LeadCompetitorScalarFieldEnumSchema'
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

export const LeadCompetitorFindFirstArgsSchema: z.ZodType<Prisma.LeadCompetitorFindFirstArgs> = z
    .object({
        select: LeadCompetitorSelectSchema.optional(),
        include: LeadCompetitorIncludeSchema.optional(),
        where: LeadCompetitorWhereInputSchema.optional(),
        orderBy: z.union([LeadCompetitorOrderByWithRelationInputSchema.array(), LeadCompetitorOrderByWithRelationInputSchema]).optional(),
        cursor: LeadCompetitorWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([LeadCompetitorScalarFieldEnumSchema, LeadCompetitorScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default LeadCompetitorFindFirstArgsSchema
