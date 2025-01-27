import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceCommentWhereUniqueInputSchema } from './InvoiceCommentWhereUniqueInputSchema';
import { InvoiceCommentUpdateWithoutParentInputSchema } from './InvoiceCommentUpdateWithoutParentInputSchema';
import { InvoiceCommentUncheckedUpdateWithoutParentInputSchema } from './InvoiceCommentUncheckedUpdateWithoutParentInputSchema';

export const InvoiceCommentUpdateWithWhereUniqueWithoutParentInputSchema: z.ZodType<Prisma.InvoiceCommentUpdateWithWhereUniqueWithoutParentInput> = z.object({
  where: z.lazy(() => InvoiceCommentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => InvoiceCommentUpdateWithoutParentInputSchema),z.lazy(() => InvoiceCommentUncheckedUpdateWithoutParentInputSchema) ]),
}).strict();

export default InvoiceCommentUpdateWithWhereUniqueWithoutParentInputSchema;
