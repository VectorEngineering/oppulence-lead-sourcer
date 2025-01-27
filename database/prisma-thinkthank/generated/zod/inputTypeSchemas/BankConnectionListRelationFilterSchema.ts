import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BankConnectionWhereInputSchema } from './BankConnectionWhereInputSchema'

export const BankConnectionListRelationFilterSchema: z.ZodType<Prisma.BankConnectionListRelationFilter> = z
    .object({
        every: z.lazy(() => BankConnectionWhereInputSchema).optional(),
        some: z.lazy(() => BankConnectionWhereInputSchema).optional(),
        none: z.lazy(() => BankConnectionWhereInputSchema).optional()
    })
    .strict()

export default BankConnectionListRelationFilterSchema
