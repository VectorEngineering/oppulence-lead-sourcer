import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceHistoryWhereUniqueInputSchema } from './InvoiceHistoryWhereUniqueInputSchema';
import { InvoiceHistoryUpdateWithoutInvoiceInputSchema } from './InvoiceHistoryUpdateWithoutInvoiceInputSchema';
import { InvoiceHistoryUncheckedUpdateWithoutInvoiceInputSchema } from './InvoiceHistoryUncheckedUpdateWithoutInvoiceInputSchema';

export const InvoiceHistoryUpdateWithWhereUniqueWithoutInvoiceInputSchema: z.ZodType<Prisma.InvoiceHistoryUpdateWithWhereUniqueWithoutInvoiceInput> = z.object({
  where: z.lazy(() => InvoiceHistoryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => InvoiceHistoryUpdateWithoutInvoiceInputSchema),z.lazy(() => InvoiceHistoryUncheckedUpdateWithoutInvoiceInputSchema) ]),
}).strict();

export default InvoiceHistoryUpdateWithWhereUniqueWithoutInvoiceInputSchema;
