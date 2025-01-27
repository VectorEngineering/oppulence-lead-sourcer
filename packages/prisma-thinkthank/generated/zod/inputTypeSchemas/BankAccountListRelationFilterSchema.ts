import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BankAccountWhereInputSchema } from './BankAccountWhereInputSchema'

export const BankAccountListRelationFilterSchema: z.ZodType<Prisma.BankAccountListRelationFilter> = z
    .object({
        every: z.lazy(() => BankAccountWhereInputSchema).optional(),
        some: z.lazy(() => BankAccountWhereInputSchema).optional(),
        none: z.lazy(() => BankAccountWhereInputSchema).optional()
    })
    .strict()

export default BankAccountListRelationFilterSchema
