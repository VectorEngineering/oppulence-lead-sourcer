import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceCommentCreateWithoutInvoiceInputSchema } from './InvoiceCommentCreateWithoutInvoiceInputSchema';
import { InvoiceCommentUncheckedCreateWithoutInvoiceInputSchema } from './InvoiceCommentUncheckedCreateWithoutInvoiceInputSchema';
import { InvoiceCommentCreateOrConnectWithoutInvoiceInputSchema } from './InvoiceCommentCreateOrConnectWithoutInvoiceInputSchema';
import { InvoiceCommentUpsertWithWhereUniqueWithoutInvoiceInputSchema } from './InvoiceCommentUpsertWithWhereUniqueWithoutInvoiceInputSchema';
import { InvoiceCommentCreateManyInvoiceInputEnvelopeSchema } from './InvoiceCommentCreateManyInvoiceInputEnvelopeSchema';
import { InvoiceCommentWhereUniqueInputSchema } from './InvoiceCommentWhereUniqueInputSchema';
import { InvoiceCommentUpdateWithWhereUniqueWithoutInvoiceInputSchema } from './InvoiceCommentUpdateWithWhereUniqueWithoutInvoiceInputSchema';
import { InvoiceCommentUpdateManyWithWhereWithoutInvoiceInputSchema } from './InvoiceCommentUpdateManyWithWhereWithoutInvoiceInputSchema';
import { InvoiceCommentScalarWhereInputSchema } from './InvoiceCommentScalarWhereInputSchema';

export const InvoiceCommentUpdateManyWithoutInvoiceNestedInputSchema: z.ZodType<Prisma.InvoiceCommentUpdateManyWithoutInvoiceNestedInput> = z.object({
  create: z.union([ z.lazy(() => InvoiceCommentCreateWithoutInvoiceInputSchema),z.lazy(() => InvoiceCommentCreateWithoutInvoiceInputSchema).array(),z.lazy(() => InvoiceCommentUncheckedCreateWithoutInvoiceInputSchema),z.lazy(() => InvoiceCommentUncheckedCreateWithoutInvoiceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InvoiceCommentCreateOrConnectWithoutInvoiceInputSchema),z.lazy(() => InvoiceCommentCreateOrConnectWithoutInvoiceInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InvoiceCommentUpsertWithWhereUniqueWithoutInvoiceInputSchema),z.lazy(() => InvoiceCommentUpsertWithWhereUniqueWithoutInvoiceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InvoiceCommentCreateManyInvoiceInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InvoiceCommentWhereUniqueInputSchema),z.lazy(() => InvoiceCommentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InvoiceCommentWhereUniqueInputSchema),z.lazy(() => InvoiceCommentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InvoiceCommentWhereUniqueInputSchema),z.lazy(() => InvoiceCommentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InvoiceCommentWhereUniqueInputSchema),z.lazy(() => InvoiceCommentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InvoiceCommentUpdateWithWhereUniqueWithoutInvoiceInputSchema),z.lazy(() => InvoiceCommentUpdateWithWhereUniqueWithoutInvoiceInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InvoiceCommentUpdateManyWithWhereWithoutInvoiceInputSchema),z.lazy(() => InvoiceCommentUpdateManyWithWhereWithoutInvoiceInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InvoiceCommentScalarWhereInputSchema),z.lazy(() => InvoiceCommentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default InvoiceCommentUpdateManyWithoutInvoiceNestedInputSchema;
