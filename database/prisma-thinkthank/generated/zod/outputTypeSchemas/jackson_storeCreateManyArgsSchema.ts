import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { jackson_storeCreateManyInputSchema } from '../inputTypeSchemas/jackson_storeCreateManyInputSchema'

export const jackson_storeCreateManyArgsSchema: z.ZodType<Prisma.jackson_storeCreateManyArgs> = z
    .object({
        data: z.union([jackson_storeCreateManyInputSchema, jackson_storeCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default jackson_storeCreateManyArgsSchema
