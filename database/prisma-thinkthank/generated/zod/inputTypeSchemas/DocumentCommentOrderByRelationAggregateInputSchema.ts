import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DocumentCommentOrderByRelationAggregateInputSchema: z.ZodType<Prisma.DocumentCommentOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default DocumentCommentOrderByRelationAggregateInputSchema;
