import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  isMachine: z.lazy(() => SortOrderSchema).optional(),
  passwordHash: z.lazy(() => SortOrderSchema).optional(),
  invalidLoginAttempts: z.lazy(() => SortOrderSchema).optional(),
  lockedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  subscribed: z.lazy(() => SortOrderSchema).optional(),
  source: z.lazy(() => SortOrderSchema).optional(),
  defaultWorkspace: z.lazy(() => SortOrderSchema).optional(),
  defaultPartnerId: z.lazy(() => SortOrderSchema).optional(),
  referralLinkId: z.lazy(() => SortOrderSchema).optional(),
  fullName: z.lazy(() => SortOrderSchema).optional(),
  dateFormat: z.lazy(() => SortOrderSchema).optional(),
  locale: z.lazy(() => SortOrderSchema).optional(),
  timeFormat: z.lazy(() => SortOrderSchema).optional(),
  timezone: z.lazy(() => SortOrderSchema).optional(),
  weekStartsOnMonday: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default UserMinOrderByAggregateInputSchema;
