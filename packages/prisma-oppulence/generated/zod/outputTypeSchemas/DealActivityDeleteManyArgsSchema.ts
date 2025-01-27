import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DealActivityWhereInputSchema } from '../inputTypeSchemas/DealActivityWhereInputSchema'

export const DealActivityDeleteManyArgsSchema: z.ZodType<Prisma.DealActivityDeleteManyArgs> = z
    .object({
        where: DealActivityWhereInputSchema.optional()
    })
    .strict()

export default DealActivityDeleteManyArgsSchema
