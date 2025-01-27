import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoiceTemplateCountOutputTypeSelectSchema } from './InvoiceTemplateCountOutputTypeSelectSchema';

export const InvoiceTemplateCountOutputTypeArgsSchema: z.ZodType<Prisma.InvoiceTemplateCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => InvoiceTemplateCountOutputTypeSelectSchema).nullish(),
}).strict();

export default InvoiceTemplateCountOutputTypeSelectSchema;
