import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { RestrictedTokenCreateManyInputSchema } from '../inputTypeSchemas/RestrictedTokenCreateManyInputSchema'

export const RestrictedTokenCreateManyArgsSchema: z.ZodType<Prisma.RestrictedTokenCreateManyArgs> = z
    .object({
        data: z.union([RestrictedTokenCreateManyInputSchema, RestrictedTokenCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default RestrictedTokenCreateManyArgsSchema
