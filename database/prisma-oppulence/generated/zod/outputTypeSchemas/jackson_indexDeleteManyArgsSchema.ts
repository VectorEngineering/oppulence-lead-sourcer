import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { jackson_indexWhereInputSchema } from '../inputTypeSchemas/jackson_indexWhereInputSchema'

export const jackson_indexDeleteManyArgsSchema: z.ZodType<Prisma.jackson_indexDeleteManyArgs> = z
    .object({
        where: jackson_indexWhereInputSchema.optional()
    })
    .strict()

export default jackson_indexDeleteManyArgsSchema
