import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceCommentScalarWhereInputSchema } from './InvoiceCommentScalarWhereInputSchema';
import { InvoiceCommentUpdateManyMutationInputSchema } from './InvoiceCommentUpdateManyMutationInputSchema';
import { InvoiceCommentUncheckedUpdateManyWithoutParentInputSchema } from './InvoiceCommentUncheckedUpdateManyWithoutParentInputSchema';

export const InvoiceCommentUpdateManyWithWhereWithoutParentInputSchema: z.ZodType<Prisma.InvoiceCommentUpdateManyWithWhereWithoutParentInput> = z.object({
  where: z.lazy(() => InvoiceCommentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => InvoiceCommentUpdateManyMutationInputSchema),z.lazy(() => InvoiceCommentUncheckedUpdateManyWithoutParentInputSchema) ]),
}).strict();

export default InvoiceCommentUpdateManyWithWhereWithoutParentInputSchema;
