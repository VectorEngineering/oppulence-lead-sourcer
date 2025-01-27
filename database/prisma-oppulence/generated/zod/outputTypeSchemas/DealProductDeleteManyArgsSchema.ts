import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DealProductWhereInputSchema } from '../inputTypeSchemas/DealProductWhereInputSchema'

export const DealProductDeleteManyArgsSchema: z.ZodType<Prisma.DealProductDeleteManyArgs> = z
    .object({
        where: DealProductWhereInputSchema.optional()
    })
    .strict()

export default DealProductDeleteManyArgsSchema
