import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceCommentVisibilitySchema } from './InvoiceCommentVisibilitySchema';

export const EnumInvoiceCommentVisibilityFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumInvoiceCommentVisibilityFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => InvoiceCommentVisibilitySchema).optional()
}).strict();

export default EnumInvoiceCommentVisibilityFieldUpdateOperationsInputSchema;
