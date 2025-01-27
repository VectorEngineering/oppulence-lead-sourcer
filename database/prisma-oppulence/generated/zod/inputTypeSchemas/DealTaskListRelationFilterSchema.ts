import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealTaskWhereInputSchema } from './DealTaskWhereInputSchema'

export const DealTaskListRelationFilterSchema: z.ZodType<Prisma.DealTaskListRelationFilter> = z
    .object({
        every: z.lazy(() => DealTaskWhereInputSchema).optional(),
        some: z.lazy(() => DealTaskWhereInputSchema).optional(),
        none: z.lazy(() => DealTaskWhereInputSchema).optional()
    })
    .strict()

export default DealTaskListRelationFilterSchema
