import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const ProgramApplicationOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProgramApplicationOrderByRelationAggregateInput> = z
    .object({
        _count: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default ProgramApplicationOrderByRelationAggregateInputSchema
