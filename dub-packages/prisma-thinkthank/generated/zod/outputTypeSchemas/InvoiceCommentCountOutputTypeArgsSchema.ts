import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoiceCommentCountOutputTypeSelectSchema } from './InvoiceCommentCountOutputTypeSelectSchema';

export const InvoiceCommentCountOutputTypeArgsSchema: z.ZodType<Prisma.InvoiceCommentCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => InvoiceCommentCountOutputTypeSelectSchema).nullish(),
}).strict();

export default InvoiceCommentCountOutputTypeSelectSchema;
