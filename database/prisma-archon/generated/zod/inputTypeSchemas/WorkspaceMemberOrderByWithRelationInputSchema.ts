import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { WorkspaceOrderByWithRelationInputSchema } from './WorkspaceOrderByWithRelationInputSchema'
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema'
import { WorkspaceMemberOrderByRelevanceInputSchema } from './WorkspaceMemberOrderByRelevanceInputSchema'

export const WorkspaceMemberOrderByWithRelationInputSchema: z.ZodType<Prisma.WorkspaceMemberOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        workspaceId: z.lazy(() => SortOrderSchema).optional(),
        userId: z.lazy(() => SortOrderSchema).optional(),
        role: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        workspace: z.lazy(() => WorkspaceOrderByWithRelationInputSchema).optional(),
        user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
        _relevance: z.lazy(() => WorkspaceMemberOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default WorkspaceMemberOrderByWithRelationInputSchema
