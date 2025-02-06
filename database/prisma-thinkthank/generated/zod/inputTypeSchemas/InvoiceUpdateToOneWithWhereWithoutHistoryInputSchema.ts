import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceWhereInputSchema } from './InvoiceWhereInputSchema';
import { InvoiceUpdateWithoutHistoryInputSchema } from './InvoiceUpdateWithoutHistoryInputSchema';
import { InvoiceUncheckedUpdateWithoutHistoryInputSchema } from './InvoiceUncheckedUpdateWithoutHistoryInputSchema';

export const InvoiceUpdateToOneWithWhereWithoutHistoryInputSchema: z.ZodType<Prisma.InvoiceUpdateToOneWithWhereWithoutHistoryInput> = z.object({
  where: z.lazy(() => InvoiceWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => InvoiceUpdateWithoutHistoryInputSchema),z.lazy(() => InvoiceUncheckedUpdateWithoutHistoryInputSchema) ]),
}).strict();

export default InvoiceUpdateToOneWithWhereWithoutHistoryInputSchema;
