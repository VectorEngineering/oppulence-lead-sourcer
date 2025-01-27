import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealWhereInputSchema } from './DealWhereInputSchema'

export const DealRelationFilterSchema: z.ZodType<Prisma.DealRelationFilter> = z
    .object({
        is: z.lazy(() => DealWhereInputSchema).optional(),
        isNot: z.lazy(() => DealWhereInputSchema).optional()
    })
    .strict()

export default DealRelationFilterSchema
