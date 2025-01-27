import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const ProjectInviteOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProjectInviteOrderByRelationAggregateInput> = z
    .object({
        _count: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default ProjectInviteOrderByRelationAggregateInputSchema
