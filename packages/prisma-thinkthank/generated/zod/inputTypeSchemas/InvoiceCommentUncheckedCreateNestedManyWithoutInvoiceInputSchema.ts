import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceCommentCreateWithoutInvoiceInputSchema } from './InvoiceCommentCreateWithoutInvoiceInputSchema';
import { InvoiceCommentUncheckedCreateWithoutInvoiceInputSchema } from './InvoiceCommentUncheckedCreateWithoutInvoiceInputSchema';
import { InvoiceCommentCreateOrConnectWithoutInvoiceInputSchema } from './InvoiceCommentCreateOrConnectWithoutInvoiceInputSchema';
import { InvoiceCommentCreateManyInvoiceInputEnvelopeSchema } from './InvoiceCommentCreateManyInvoiceInputEnvelopeSchema';
import { InvoiceCommentWhereUniqueInputSchema } from './InvoiceCommentWhereUniqueInputSchema';

export const InvoiceCommentUncheckedCreateNestedManyWithoutInvoiceInputSchema: z.ZodType<Prisma.InvoiceCommentUncheckedCreateNestedManyWithoutInvoiceInput> = z.object({
  create: z.union([ z.lazy(() => InvoiceCommentCreateWithoutInvoiceInputSchema),z.lazy(() => InvoiceCommentCreateWithoutInvoiceInputSchema).array(),z.lazy(() => InvoiceCommentUncheckedCreateWithoutInvoiceInputSchema),z.lazy(() => InvoiceCommentUncheckedCreateWithoutInvoiceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InvoiceCommentCreateOrConnectWithoutInvoiceInputSchema),z.lazy(() => InvoiceCommentCreateOrConnectWithoutInvoiceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InvoiceCommentCreateManyInvoiceInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InvoiceCommentWhereUniqueInputSchema),z.lazy(() => InvoiceCommentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default InvoiceCommentUncheckedCreateNestedManyWithoutInvoiceInputSchema;
