import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PartnerCountOrderByAggregateInputSchema } from './PartnerCountOrderByAggregateInputSchema';
import { PartnerMaxOrderByAggregateInputSchema } from './PartnerMaxOrderByAggregateInputSchema';
import { PartnerMinOrderByAggregateInputSchema } from './PartnerMinOrderByAggregateInputSchema';

export const PartnerOrderByWithAggregationInputSchema: z.ZodType<Prisma.PartnerOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  bio: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  country: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  stripeConnectId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  payoutsEnabled: z.lazy(() => SortOrderSchema).optional(),
  showOnLeaderboard: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PartnerCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PartnerMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PartnerMinOrderByAggregateInputSchema).optional()
}).strict();

export default PartnerOrderByWithAggregationInputSchema;
