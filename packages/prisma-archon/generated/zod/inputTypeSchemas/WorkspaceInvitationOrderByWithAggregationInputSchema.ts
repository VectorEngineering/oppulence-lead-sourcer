import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { WorkspaceInvitationCountOrderByAggregateInputSchema } from './WorkspaceInvitationCountOrderByAggregateInputSchema';
import { WorkspaceInvitationMaxOrderByAggregateInputSchema } from './WorkspaceInvitationMaxOrderByAggregateInputSchema';
import { WorkspaceInvitationMinOrderByAggregateInputSchema } from './WorkspaceInvitationMinOrderByAggregateInputSchema';

export const WorkspaceInvitationOrderByWithAggregationInputSchema: z.ZodType<Prisma.WorkspaceInvitationOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  workspaceId: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => WorkspaceInvitationCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => WorkspaceInvitationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => WorkspaceInvitationMinOrderByAggregateInputSchema).optional()
}).strict();

export default WorkspaceInvitationOrderByWithAggregationInputSchema;
