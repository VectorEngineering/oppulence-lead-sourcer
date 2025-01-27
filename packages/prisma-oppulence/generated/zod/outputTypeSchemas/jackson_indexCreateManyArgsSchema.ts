import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { jackson_indexCreateManyInputSchema } from '../inputTypeSchemas/jackson_indexCreateManyInputSchema'

export const jackson_indexCreateManyArgsSchema: z.ZodType<Prisma.jackson_indexCreateManyArgs> = z
    .object({
        data: z.union([jackson_indexCreateManyInputSchema, jackson_indexCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default jackson_indexCreateManyArgsSchema
