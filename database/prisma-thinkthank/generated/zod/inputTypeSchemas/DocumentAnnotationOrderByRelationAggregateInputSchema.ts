import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DocumentAnnotationOrderByRelationAggregateInputSchema: z.ZodType<Prisma.DocumentAnnotationOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default DocumentAnnotationOrderByRelationAggregateInputSchema;
