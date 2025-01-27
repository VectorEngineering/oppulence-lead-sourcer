import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DealCompetitorIncludeSchema } from '../inputTypeSchemas/DealCompetitorIncludeSchema'
import { DealCompetitorWhereUniqueInputSchema } from '../inputTypeSchemas/DealCompetitorWhereUniqueInputSchema'
import { DealCompetitorCreateInputSchema } from '../inputTypeSchemas/DealCompetitorCreateInputSchema'
import { DealCompetitorUncheckedCreateInputSchema } from '../inputTypeSchemas/DealCompetitorUncheckedCreateInputSchema'
import { DealCompetitorUpdateInputSchema } from '../inputTypeSchemas/DealCompetitorUpdateInputSchema'
import { DealCompetitorUncheckedUpdateInputSchema } from '../inputTypeSchemas/DealCompetitorUncheckedUpdateInputSchema'
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

export const DealCompetitorUpsertArgsSchema: z.ZodType<Prisma.DealCompetitorUpsertArgs> = z
    .object({
        select: DealCompetitorSelectSchema.optional(),
        include: DealCompetitorIncludeSchema.optional(),
        where: DealCompetitorWhereUniqueInputSchema,
        create: z.union([DealCompetitorCreateInputSchema, DealCompetitorUncheckedCreateInputSchema]),
        update: z.union([DealCompetitorUpdateInputSchema, DealCompetitorUncheckedUpdateInputSchema])
    })
    .strict()

export default DealCompetitorUpsertArgsSchema
