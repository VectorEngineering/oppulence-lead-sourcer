import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceWhereInputSchema } from './InvoiceWhereInputSchema';
import { InvoiceUpdateWithoutAttachmentsInputSchema } from './InvoiceUpdateWithoutAttachmentsInputSchema';
import { InvoiceUncheckedUpdateWithoutAttachmentsInputSchema } from './InvoiceUncheckedUpdateWithoutAttachmentsInputSchema';

export const InvoiceUpdateToOneWithWhereWithoutAttachmentsInputSchema: z.ZodType<Prisma.InvoiceUpdateToOneWithWhereWithoutAttachmentsInput> = z.object({
  where: z.lazy(() => InvoiceWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => InvoiceUpdateWithoutAttachmentsInputSchema),z.lazy(() => InvoiceUncheckedUpdateWithoutAttachmentsInputSchema) ]),
}).strict();

export default InvoiceUpdateToOneWithWhereWithoutAttachmentsInputSchema;
