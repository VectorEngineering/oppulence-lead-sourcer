import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CustomerWhereInputSchema } from './CustomerWhereInputSchema'

export const CustomerRelationFilterSchema: z.ZodType<Prisma.CustomerRelationFilter> = z
    .object({
        is: z.lazy(() => CustomerWhereInputSchema).optional(),
        isNot: z.lazy(() => CustomerWhereInputSchema).optional()
    })
    .strict()

export default CustomerRelationFilterSchema
