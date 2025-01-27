import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WorkspaceInvitationOrderByRelationAggregateInputSchema: z.ZodType<Prisma.WorkspaceInvitationOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default WorkspaceInvitationOrderByRelationAggregateInputSchema;
