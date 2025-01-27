import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DealCompetitorIncludeSchema } from '../inputTypeSchemas/DealCompetitorIncludeSchema'
import { DealCompetitorWhereInputSchema } from '../inputTypeSchemas/DealCompetitorWhereInputSchema'
import { DealCompetitorOrderByWithRelationInputSchema } from '../inputTypeSchemas/DealCompetitorOrderByWithRelationInputSchema'
import { DealCompetitorWhereUniqueInputSchema } from '../inputTypeSchemas/DealCompetitorWhereUniqueInputSchema'
import { DealCompetitorScalarFieldEnumSchema } from '../inputTypeSchemas/DealCompetitorScalarFieldEnumSchema'
import { DealArgsSchema } from './DealArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DealCompetitorSelectSchema: z.ZodType<Prisma.DealCompetitorSelect> = z
    .object({
        id: z.boolean().optional(),
        dealId: z.boolean().optional(),
        name: z.boolean().optional(),
        strengths: z.boolean().optional(),
        weaknesses: z.boolean().optional(),
        strategy: z.boolean().optional(),
        status: z.boolean().optional(),
        threatLevel: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        deal: z.union([z.boolean(), z.lazy(() => DealArgsSchema)]).optional()
    })
    .strict()

export const DealCompetitorFindFirstArgsSchema: z.ZodType<Prisma.DealCompetitorFindFirstArgs> = z
    .object({
        select: DealCompetitorSelectSchema.optional(),
        include: DealCompetitorIncludeSchema.optional(),
        where: DealCompetitorWhereInputSchema.optional(),
        orderBy: z.union([DealCompetitorOrderByWithRelationInputSchema.array(), DealCompetitorOrderByWithRelationInputSchema]).optional(),
        cursor: DealCompetitorWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([DealCompetitorScalarFieldEnumSchema, DealCompetitorScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default DealCompetitorFindFirstArgsSchema
