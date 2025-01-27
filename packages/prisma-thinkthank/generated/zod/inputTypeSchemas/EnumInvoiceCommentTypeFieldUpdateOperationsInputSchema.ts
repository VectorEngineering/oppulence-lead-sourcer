import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceCommentTypeSchema } from './InvoiceCommentTypeSchema';

export const EnumInvoiceCommentTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumInvoiceCommentTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => InvoiceCommentTypeSchema).optional()
}).strict();

export default EnumInvoiceCommentTypeFieldUpdateOperationsInputSchema;
