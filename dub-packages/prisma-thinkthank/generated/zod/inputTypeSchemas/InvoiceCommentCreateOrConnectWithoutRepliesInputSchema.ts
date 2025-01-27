import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceCommentWhereUniqueInputSchema } from './InvoiceCommentWhereUniqueInputSchema';
import { InvoiceCommentCreateWithoutRepliesInputSchema } from './InvoiceCommentCreateWithoutRepliesInputSchema';
import { InvoiceCommentUncheckedCreateWithoutRepliesInputSchema } from './InvoiceCommentUncheckedCreateWithoutRepliesInputSchema';

export const InvoiceCommentCreateOrConnectWithoutRepliesInputSchema: z.ZodType<Prisma.InvoiceCommentCreateOrConnectWithoutRepliesInput> = z.object({
  where: z.lazy(() => InvoiceCommentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InvoiceCommentCreateWithoutRepliesInputSchema),z.lazy(() => InvoiceCommentUncheckedCreateWithoutRepliesInputSchema) ]),
}).strict();

export default InvoiceCommentCreateOrConnectWithoutRepliesInputSchema;
