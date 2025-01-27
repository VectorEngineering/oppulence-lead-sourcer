import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { jackson_ttlWhereInputSchema } from '../inputTypeSchemas/jackson_ttlWhereInputSchema'

export const jackson_ttlDeleteManyArgsSchema: z.ZodType<Prisma.jackson_ttlDeleteManyArgs> = z
    .object({
        where: jackson_ttlWhereInputSchema.optional()
    })
    .strict()

export default jackson_ttlDeleteManyArgsSchema
