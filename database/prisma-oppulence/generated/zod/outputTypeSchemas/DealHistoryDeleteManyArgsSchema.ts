import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DealHistoryWhereInputSchema } from '../inputTypeSchemas/DealHistoryWhereInputSchema'

export const DealHistoryDeleteManyArgsSchema: z.ZodType<Prisma.DealHistoryDeleteManyArgs> = z
    .object({
        where: DealHistoryWhereInputSchema.optional()
    })
    .strict()

export default DealHistoryDeleteManyArgsSchema
