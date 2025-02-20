import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceTemplateWhereInputSchema } from './InvoiceTemplateWhereInputSchema';
import { InvoiceTemplateUpdateWithoutInvoiceInputSchema } from './InvoiceTemplateUpdateWithoutInvoiceInputSchema';
import { InvoiceTemplateUncheckedUpdateWithoutInvoiceInputSchema } from './InvoiceTemplateUncheckedUpdateWithoutInvoiceInputSchema';

export const InvoiceTemplateUpdateToOneWithWhereWithoutInvoiceInputSchema: z.ZodType<Prisma.InvoiceTemplateUpdateToOneWithWhereWithoutInvoiceInput> = z.object({
  where: z.lazy(() => InvoiceTemplateWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => InvoiceTemplateUpdateWithoutInvoiceInputSchema),z.lazy(() => InvoiceTemplateUncheckedUpdateWithoutInvoiceInputSchema) ]),
}).strict();

export default InvoiceTemplateUpdateToOneWithWhereWithoutInvoiceInputSchema;
