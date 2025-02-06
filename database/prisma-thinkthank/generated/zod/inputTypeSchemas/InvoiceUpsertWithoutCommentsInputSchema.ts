import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceUpdateWithoutCommentsInputSchema } from './InvoiceUpdateWithoutCommentsInputSchema';
import { InvoiceUncheckedUpdateWithoutCommentsInputSchema } from './InvoiceUncheckedUpdateWithoutCommentsInputSchema';
import { InvoiceCreateWithoutCommentsInputSchema } from './InvoiceCreateWithoutCommentsInputSchema';
import { InvoiceUncheckedCreateWithoutCommentsInputSchema } from './InvoiceUncheckedCreateWithoutCommentsInputSchema';
import { InvoiceWhereInputSchema } from './InvoiceWhereInputSchema';

export const InvoiceUpsertWithoutCommentsInputSchema: z.ZodType<Prisma.InvoiceUpsertWithoutCommentsInput> = z.object({
  update: z.union([ z.lazy(() => InvoiceUpdateWithoutCommentsInputSchema),z.lazy(() => InvoiceUncheckedUpdateWithoutCommentsInputSchema) ]),
  create: z.union([ z.lazy(() => InvoiceCreateWithoutCommentsInputSchema),z.lazy(() => InvoiceUncheckedCreateWithoutCommentsInputSchema) ]),
  where: z.lazy(() => InvoiceWhereInputSchema).optional()
}).strict();

export default InvoiceUpsertWithoutCommentsInputSchema;
