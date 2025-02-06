import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceUpdateWithoutAttachmentsInputSchema } from './InvoiceUpdateWithoutAttachmentsInputSchema';
import { InvoiceUncheckedUpdateWithoutAttachmentsInputSchema } from './InvoiceUncheckedUpdateWithoutAttachmentsInputSchema';
import { InvoiceCreateWithoutAttachmentsInputSchema } from './InvoiceCreateWithoutAttachmentsInputSchema';
import { InvoiceUncheckedCreateWithoutAttachmentsInputSchema } from './InvoiceUncheckedCreateWithoutAttachmentsInputSchema';
import { InvoiceWhereInputSchema } from './InvoiceWhereInputSchema';

export const InvoiceUpsertWithoutAttachmentsInputSchema: z.ZodType<Prisma.InvoiceUpsertWithoutAttachmentsInput> = z.object({
  update: z.union([ z.lazy(() => InvoiceUpdateWithoutAttachmentsInputSchema),z.lazy(() => InvoiceUncheckedUpdateWithoutAttachmentsInputSchema) ]),
  create: z.union([ z.lazy(() => InvoiceCreateWithoutAttachmentsInputSchema),z.lazy(() => InvoiceUncheckedCreateWithoutAttachmentsInputSchema) ]),
  where: z.lazy(() => InvoiceWhereInputSchema).optional()
}).strict();

export default InvoiceUpsertWithoutAttachmentsInputSchema;
