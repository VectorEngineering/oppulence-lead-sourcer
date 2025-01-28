import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';
import { WorkspaceMemberOrderByRelationAggregateInputSchema } from './WorkspaceMemberOrderByRelationAggregateInputSchema';
import { WorkspaceInvitationOrderByRelationAggregateInputSchema } from './WorkspaceInvitationOrderByRelationAggregateInputSchema';
import { WorkspaceOrderByRelevanceInputSchema } from './WorkspaceOrderByRelevanceInputSchema';

export const WorkspaceOrderByWithRelationInputSchema: z.ZodType<Prisma.WorkspaceOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  ownerId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  owner: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  members: z.lazy(() => WorkspaceMemberOrderByRelationAggregateInputSchema).optional(),
  workspaceInvitations: z.lazy(() => WorkspaceInvitationOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => WorkspaceOrderByRelevanceInputSchema).optional()
}).strict();

export default WorkspaceOrderByWithRelationInputSchema;
