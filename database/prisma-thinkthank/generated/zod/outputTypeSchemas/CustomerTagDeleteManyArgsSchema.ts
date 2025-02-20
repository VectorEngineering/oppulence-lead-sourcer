import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { CustomerTagWhereInputSchema } from '../inputTypeSchemas/CustomerTagWhereInputSchema'

export const CustomerTagDeleteManyArgsSchema: z.ZodType<Prisma.CustomerTagDeleteManyArgs> = z
    .object({
        where: CustomerTagWhereInputSchema.optional()
    })
    .strict()

export default CustomerTagDeleteManyArgsSchema
