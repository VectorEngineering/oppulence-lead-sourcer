import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';
import { PartnerOrderByWithRelationInputSchema } from './PartnerOrderByWithRelationInputSchema';
import { PartnerUserOrderByRelevanceInputSchema } from './PartnerUserOrderByRelevanceInputSchema';

export const PartnerUserOrderByWithRelationInputSchema: z.ZodType<Prisma.PartnerUserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  partnerId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  partner: z.lazy(() => PartnerOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => PartnerUserOrderByRelevanceInputSchema).optional()
}).strict();

export default PartnerUserOrderByWithRelationInputSchema;
