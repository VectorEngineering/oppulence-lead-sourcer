import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceCommentWhereUniqueInputSchema } from './InvoiceCommentWhereUniqueInputSchema';
import { InvoiceCommentUpdateWithoutInvoiceInputSchema } from './InvoiceCommentUpdateWithoutInvoiceInputSchema';
import { InvoiceCommentUncheckedUpdateWithoutInvoiceInputSchema } from './InvoiceCommentUncheckedUpdateWithoutInvoiceInputSchema';

export const InvoiceCommentUpdateWithWhereUniqueWithoutInvoiceInputSchema: z.ZodType<Prisma.InvoiceCommentUpdateWithWhereUniqueWithoutInvoiceInput> = z.object({
  where: z.lazy(() => InvoiceCommentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => InvoiceCommentUpdateWithoutInvoiceInputSchema),z.lazy(() => InvoiceCommentUncheckedUpdateWithoutInvoiceInputSchema) ]),
}).strict();

export default InvoiceCommentUpdateWithWhereUniqueWithoutInvoiceInputSchema;
