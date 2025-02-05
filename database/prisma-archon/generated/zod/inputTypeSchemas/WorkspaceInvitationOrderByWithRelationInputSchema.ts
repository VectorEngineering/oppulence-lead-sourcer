import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { WorkspaceOrderByWithRelationInputSchema } from './WorkspaceOrderByWithRelationInputSchema'
import { WorkspaceInvitationOrderByRelevanceInputSchema } from './WorkspaceInvitationOrderByRelevanceInputSchema'

export const WorkspaceInvitationOrderByWithRelationInputSchema: z.ZodType<Prisma.WorkspaceInvitationOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        workspaceId: z.lazy(() => SortOrderSchema).optional(),
        email: z.lazy(() => SortOrderSchema).optional(),
        token: z.lazy(() => SortOrderSchema).optional(),
        status: z.lazy(() => SortOrderSchema).optional(),
        expiresAt: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        workspace: z.lazy(() => WorkspaceOrderByWithRelationInputSchema).optional(),
        _relevance: z.lazy(() => WorkspaceInvitationOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default WorkspaceInvitationOrderByWithRelationInputSchema
