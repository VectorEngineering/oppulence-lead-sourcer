import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PartnerInviteMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PartnerInviteMaxOrderByAggregateInput> = z.object({
  email: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  partnerId: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PartnerInviteMaxOrderByAggregateInputSchema;
