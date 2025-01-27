import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoiceTemplateSelectSchema } from '../inputTypeSchemas/InvoiceTemplateSelectSchema';
import { InvoiceTemplateIncludeSchema } from '../inputTypeSchemas/InvoiceTemplateIncludeSchema';

export const InvoiceTemplateArgsSchema: z.ZodType<Prisma.InvoiceTemplateDefaultArgs> = z.object({
  select: z.lazy(() => InvoiceTemplateSelectSchema).optional(),
  include: z.lazy(() => InvoiceTemplateIncludeSchema).optional(),
}).strict();

export default InvoiceTemplateArgsSchema;
