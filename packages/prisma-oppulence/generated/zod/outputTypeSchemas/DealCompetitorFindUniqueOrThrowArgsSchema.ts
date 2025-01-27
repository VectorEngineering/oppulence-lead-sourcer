import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DealCompetitorIncludeSchema } from '../inputTypeSchemas/DealCompetitorIncludeSchema'
import { DealCompetitorWhereUniqueInputSchema } from '../inputTypeSchemas/DealCompetitorWhereUniqueInputSchema'
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

export const DealCompetitorFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.DealCompetitorFindUniqueOrThrowArgs> = z
    .object({
        select: DealCompetitorSelectSchema.optional(),
        include: DealCompetitorIncludeSchema.optional(),
        where: DealCompetitorWhereUniqueInputSchema
    })
    .strict()

export default DealCompetitorFindUniqueOrThrowArgsSchema
