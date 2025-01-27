import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DealProductCreateManyInputSchema } from '../inputTypeSchemas/DealProductCreateManyInputSchema'

export const DealProductCreateManyArgsSchema: z.ZodType<Prisma.DealProductCreateManyArgs> = z
    .object({
        data: z.union([DealProductCreateManyInputSchema, DealProductCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default DealProductCreateManyArgsSchema
