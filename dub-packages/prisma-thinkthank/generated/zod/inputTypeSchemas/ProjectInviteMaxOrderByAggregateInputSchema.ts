import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProjectInviteMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProjectInviteMaxOrderByAggregateInput> = z.object({
  email: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ProjectInviteMaxOrderByAggregateInputSchema;
