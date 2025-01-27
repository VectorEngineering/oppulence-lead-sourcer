import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const UtmTemplateOrderByRelationAggregateInputSchema: z.ZodType<Prisma.UtmTemplateOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default UtmTemplateOrderByRelationAggregateInputSchema;
