import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const ProjectUsersOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProjectUsersOrderByRelationAggregateInput> = z
    .object({
        _count: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default ProjectUsersOrderByRelationAggregateInputSchema
