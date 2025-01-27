import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BankConnectionWhereInputSchema } from './BankConnectionWhereInputSchema'

export const BankConnectionRelationFilterSchema: z.ZodType<Prisma.BankConnectionRelationFilter> = z
    .object({
        is: z.lazy(() => BankConnectionWhereInputSchema).optional(),
        isNot: z.lazy(() => BankConnectionWhereInputSchema).optional()
    })
    .strict()

export default BankConnectionRelationFilterSchema
