import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { SentEmailCreateManyInputSchema } from '../inputTypeSchemas/SentEmailCreateManyInputSchema'

export const SentEmailCreateManyArgsSchema: z.ZodType<Prisma.SentEmailCreateManyArgs> = z
    .object({
        data: z.union([SentEmailCreateManyInputSchema, SentEmailCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default SentEmailCreateManyArgsSchema
