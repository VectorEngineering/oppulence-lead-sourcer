import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const InboxShareMinOrderByAggregateInputSchema: z.ZodType<Prisma.InboxShareMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  inboxId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  accessLevel: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  lastAccessed: z.lazy(() => SortOrderSchema).optional(),
  accessCount: z.lazy(() => SortOrderSchema).optional(),
  maxAccesses: z.lazy(() => SortOrderSchema).optional(),
  ipRestriction: z.lazy(() => SortOrderSchema).optional(),
  domainRestriction: z.lazy(() => SortOrderSchema).optional(),
  deviceLimit: z.lazy(() => SortOrderSchema).optional(),
  requireMFA: z.lazy(() => SortOrderSchema).optional(),
  notifyOnAccess: z.lazy(() => SortOrderSchema).optional(),
  revokedAt: z.lazy(() => SortOrderSchema).optional(),
  revokedBy: z.lazy(() => SortOrderSchema).optional(),
  revokeReason: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default InboxShareMinOrderByAggregateInputSchema;
