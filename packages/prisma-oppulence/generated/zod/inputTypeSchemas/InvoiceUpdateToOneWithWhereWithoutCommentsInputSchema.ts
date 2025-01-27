import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceWhereInputSchema } from './InvoiceWhereInputSchema';
import { InvoiceUpdateWithoutCommentsInputSchema } from './InvoiceUpdateWithoutCommentsInputSchema';
import { InvoiceUncheckedUpdateWithoutCommentsInputSchema } from './InvoiceUncheckedUpdateWithoutCommentsInputSchema';

export const InvoiceUpdateToOneWithWhereWithoutCommentsInputSchema: z.ZodType<Prisma.InvoiceUpdateToOneWithWhereWithoutCommentsInput> = z.object({
  where: z.lazy(() => InvoiceWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => InvoiceUpdateWithoutCommentsInputSchema),z.lazy(() => InvoiceUncheckedUpdateWithoutCommentsInputSchema) ]),
}).strict();

export default InvoiceUpdateToOneWithWhereWithoutCommentsInputSchema;
