import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const ProgramInviteOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProgramInviteOrderByRelationAggregateInput> = z
    .object({
        _count: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default ProgramInviteOrderByRelationAggregateInputSchema
