import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const InvoiceAttachmentAvgOrderByAggregateInputSchema: z.ZodType<Prisma.InvoiceAttachmentAvgOrderByAggregateInput> = z.object({
  size: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default InvoiceAttachmentAvgOrderByAggregateInputSchema;
