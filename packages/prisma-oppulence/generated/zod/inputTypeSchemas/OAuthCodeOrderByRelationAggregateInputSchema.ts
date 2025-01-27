import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const OAuthCodeOrderByRelationAggregateInputSchema: z.ZodType<Prisma.OAuthCodeOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default OAuthCodeOrderByRelationAggregateInputSchema;
