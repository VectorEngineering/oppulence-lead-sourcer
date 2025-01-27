import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const ProgramEnrollmentOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProgramEnrollmentOrderByRelationAggregateInput> = z
    .object({
        _count: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default ProgramEnrollmentOrderByRelationAggregateInputSchema
