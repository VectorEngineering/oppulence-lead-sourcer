import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceHistoryWhereUniqueInputSchema } from './InvoiceHistoryWhereUniqueInputSchema';
import { InvoiceHistoryUpdateWithoutInvoiceInputSchema } from './InvoiceHistoryUpdateWithoutInvoiceInputSchema';
import { InvoiceHistoryUncheckedUpdateWithoutInvoiceInputSchema } from './InvoiceHistoryUncheckedUpdateWithoutInvoiceInputSchema';
import { InvoiceHistoryCreateWithoutInvoiceInputSchema } from './InvoiceHistoryCreateWithoutInvoiceInputSchema';
import { InvoiceHistoryUncheckedCreateWithoutInvoiceInputSchema } from './InvoiceHistoryUncheckedCreateWithoutInvoiceInputSchema';

export const InvoiceHistoryUpsertWithWhereUniqueWithoutInvoiceInputSchema: z.ZodType<Prisma.InvoiceHistoryUpsertWithWhereUniqueWithoutInvoiceInput> = z.object({
  where: z.lazy(() => InvoiceHistoryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => InvoiceHistoryUpdateWithoutInvoiceInputSchema),z.lazy(() => InvoiceHistoryUncheckedUpdateWithoutInvoiceInputSchema) ]),
  create: z.union([ z.lazy(() => InvoiceHistoryCreateWithoutInvoiceInputSchema),z.lazy(() => InvoiceHistoryUncheckedCreateWithoutInvoiceInputSchema) ]),
}).strict();

export default InvoiceHistoryUpsertWithWhereUniqueWithoutInvoiceInputSchema;
