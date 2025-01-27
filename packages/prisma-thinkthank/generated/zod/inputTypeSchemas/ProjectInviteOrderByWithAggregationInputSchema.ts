import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { ProjectInviteCountOrderByAggregateInputSchema } from './ProjectInviteCountOrderByAggregateInputSchema'
import { ProjectInviteMaxOrderByAggregateInputSchema } from './ProjectInviteMaxOrderByAggregateInputSchema'
import { ProjectInviteMinOrderByAggregateInputSchema } from './ProjectInviteMinOrderByAggregateInputSchema'

export const ProjectInviteOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProjectInviteOrderByWithAggregationInput> = z
    .object({
        email: z.lazy(() => SortOrderSchema).optional(),
        expires: z.lazy(() => SortOrderSchema).optional(),
        projectId: z.lazy(() => SortOrderSchema).optional(),
        role: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => ProjectInviteCountOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => ProjectInviteMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => ProjectInviteMinOrderByAggregateInputSchema).optional()
    })
    .strict()

export default ProjectInviteOrderByWithAggregationInputSchema
