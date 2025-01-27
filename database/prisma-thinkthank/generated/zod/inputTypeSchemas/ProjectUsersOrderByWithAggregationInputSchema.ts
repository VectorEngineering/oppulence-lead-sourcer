import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { ProjectUsersCountOrderByAggregateInputSchema } from './ProjectUsersCountOrderByAggregateInputSchema'
import { ProjectUsersMaxOrderByAggregateInputSchema } from './ProjectUsersMaxOrderByAggregateInputSchema'
import { ProjectUsersMinOrderByAggregateInputSchema } from './ProjectUsersMinOrderByAggregateInputSchema'

export const ProjectUsersOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProjectUsersOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        role: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        userId: z.lazy(() => SortOrderSchema).optional(),
        projectId: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => ProjectUsersCountOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => ProjectUsersMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => ProjectUsersMinOrderByAggregateInputSchema).optional()
    })
    .strict()

export default ProjectUsersOrderByWithAggregationInputSchema
