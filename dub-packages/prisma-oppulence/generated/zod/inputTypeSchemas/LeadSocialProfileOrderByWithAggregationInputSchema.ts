import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LeadSocialProfileCountOrderByAggregateInputSchema } from './LeadSocialProfileCountOrderByAggregateInputSchema';
import { LeadSocialProfileMaxOrderByAggregateInputSchema } from './LeadSocialProfileMaxOrderByAggregateInputSchema';
import { LeadSocialProfileMinOrderByAggregateInputSchema } from './LeadSocialProfileMinOrderByAggregateInputSchema';

export const LeadSocialProfileOrderByWithAggregationInputSchema: z.ZodType<Prisma.LeadSocialProfileOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  leadId: z.lazy(() => SortOrderSchema).optional(),
  platform: z.lazy(() => SortOrderSchema).optional(),
  profileUrl: z.lazy(() => SortOrderSchema).optional(),
  username: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  lastSynced: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => LeadSocialProfileCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LeadSocialProfileMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LeadSocialProfileMinOrderByAggregateInputSchema).optional()
}).strict();

export default LeadSocialProfileOrderByWithAggregationInputSchema;
