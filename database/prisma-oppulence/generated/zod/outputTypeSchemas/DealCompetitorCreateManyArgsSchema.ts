import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DealCompetitorCreateManyInputSchema } from '../inputTypeSchemas/DealCompetitorCreateManyInputSchema'

export const DealCompetitorCreateManyArgsSchema: z.ZodType<Prisma.DealCompetitorCreateManyArgs> = z
    .object({
        data: z.union([DealCompetitorCreateManyInputSchema, DealCompetitorCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default DealCompetitorCreateManyArgsSchema
