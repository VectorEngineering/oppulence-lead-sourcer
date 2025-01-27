import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PartnerInviteOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PartnerInviteOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PartnerInviteOrderByRelationAggregateInputSchema;
