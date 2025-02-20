import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PayoutWhereInputSchema } from './PayoutWhereInputSchema'

export const PayoutListRelationFilterSchema: z.ZodType<Prisma.PayoutListRelationFilter> = z
    .object({
        every: z.lazy(() => PayoutWhereInputSchema).optional(),
        some: z.lazy(() => PayoutWhereInputSchema).optional(),
        none: z.lazy(() => PayoutWhereInputSchema).optional()
    })
    .strict()

export default PayoutListRelationFilterSchema
