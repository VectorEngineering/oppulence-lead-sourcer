import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { SentEmailWhereInputSchema } from '../inputTypeSchemas/SentEmailWhereInputSchema'

export const SentEmailDeleteManyArgsSchema: z.ZodType<Prisma.SentEmailDeleteManyArgs> = z
    .object({
        where: SentEmailWhereInputSchema.optional()
    })
    .strict()

export default SentEmailDeleteManyArgsSchema
