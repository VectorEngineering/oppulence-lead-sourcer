import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceCommentCreateWithoutParentInputSchema } from './InvoiceCommentCreateWithoutParentInputSchema';
import { InvoiceCommentUncheckedCreateWithoutParentInputSchema } from './InvoiceCommentUncheckedCreateWithoutParentInputSchema';
import { InvoiceCommentCreateOrConnectWithoutParentInputSchema } from './InvoiceCommentCreateOrConnectWithoutParentInputSchema';
import { InvoiceCommentUpsertWithWhereUniqueWithoutParentInputSchema } from './InvoiceCommentUpsertWithWhereUniqueWithoutParentInputSchema';
import { InvoiceCommentCreateManyParentInputEnvelopeSchema } from './InvoiceCommentCreateManyParentInputEnvelopeSchema';
import { InvoiceCommentWhereUniqueInputSchema } from './InvoiceCommentWhereUniqueInputSchema';
import { InvoiceCommentUpdateWithWhereUniqueWithoutParentInputSchema } from './InvoiceCommentUpdateWithWhereUniqueWithoutParentInputSchema';
import { InvoiceCommentUpdateManyWithWhereWithoutParentInputSchema } from './InvoiceCommentUpdateManyWithWhereWithoutParentInputSchema';
import { InvoiceCommentScalarWhereInputSchema } from './InvoiceCommentScalarWhereInputSchema';

export const InvoiceCommentUpdateManyWithoutParentNestedInputSchema: z.ZodType<Prisma.InvoiceCommentUpdateManyWithoutParentNestedInput> = z.object({
  create: z.union([ z.lazy(() => InvoiceCommentCreateWithoutParentInputSchema),z.lazy(() => InvoiceCommentCreateWithoutParentInputSchema).array(),z.lazy(() => InvoiceCommentUncheckedCreateWithoutParentInputSchema),z.lazy(() => InvoiceCommentUncheckedCreateWithoutParentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InvoiceCommentCreateOrConnectWithoutParentInputSchema),z.lazy(() => InvoiceCommentCreateOrConnectWithoutParentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InvoiceCommentUpsertWithWhereUniqueWithoutParentInputSchema),z.lazy(() => InvoiceCommentUpsertWithWhereUniqueWithoutParentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InvoiceCommentCreateManyParentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InvoiceCommentWhereUniqueInputSchema),z.lazy(() => InvoiceCommentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InvoiceCommentWhereUniqueInputSchema),z.lazy(() => InvoiceCommentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InvoiceCommentWhereUniqueInputSchema),z.lazy(() => InvoiceCommentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InvoiceCommentWhereUniqueInputSchema),z.lazy(() => InvoiceCommentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InvoiceCommentUpdateWithWhereUniqueWithoutParentInputSchema),z.lazy(() => InvoiceCommentUpdateWithWhereUniqueWithoutParentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InvoiceCommentUpdateManyWithWhereWithoutParentInputSchema),z.lazy(() => InvoiceCommentUpdateManyWithWhereWithoutParentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InvoiceCommentScalarWhereInputSchema),z.lazy(() => InvoiceCommentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default InvoiceCommentUpdateManyWithoutParentNestedInputSchema;
