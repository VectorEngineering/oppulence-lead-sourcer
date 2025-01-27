import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { jackson_ttlCreateManyInputSchema } from '../inputTypeSchemas/jackson_ttlCreateManyInputSchema'

export const jackson_ttlCreateManyArgsSchema: z.ZodType<Prisma.jackson_ttlCreateManyArgs> = z
    .object({
        data: z.union([jackson_ttlCreateManyInputSchema, jackson_ttlCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default jackson_ttlCreateManyArgsSchema
