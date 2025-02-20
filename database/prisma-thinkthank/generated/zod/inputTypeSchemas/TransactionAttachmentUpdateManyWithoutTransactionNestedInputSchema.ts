import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionAttachmentCreateWithoutTransactionInputSchema } from './TransactionAttachmentCreateWithoutTransactionInputSchema';
import { TransactionAttachmentUncheckedCreateWithoutTransactionInputSchema } from './TransactionAttachmentUncheckedCreateWithoutTransactionInputSchema';
import { TransactionAttachmentCreateOrConnectWithoutTransactionInputSchema } from './TransactionAttachmentCreateOrConnectWithoutTransactionInputSchema';
import { TransactionAttachmentUpsertWithWhereUniqueWithoutTransactionInputSchema } from './TransactionAttachmentUpsertWithWhereUniqueWithoutTransactionInputSchema';
import { TransactionAttachmentCreateManyTransactionInputEnvelopeSchema } from './TransactionAttachmentCreateManyTransactionInputEnvelopeSchema';
import { TransactionAttachmentWhereUniqueInputSchema } from './TransactionAttachmentWhereUniqueInputSchema';
import { TransactionAttachmentUpdateWithWhereUniqueWithoutTransactionInputSchema } from './TransactionAttachmentUpdateWithWhereUniqueWithoutTransactionInputSchema';
import { TransactionAttachmentUpdateManyWithWhereWithoutTransactionInputSchema } from './TransactionAttachmentUpdateManyWithWhereWithoutTransactionInputSchema';
import { TransactionAttachmentScalarWhereInputSchema } from './TransactionAttachmentScalarWhereInputSchema';

export const TransactionAttachmentUpdateManyWithoutTransactionNestedInputSchema: z.ZodType<Prisma.TransactionAttachmentUpdateManyWithoutTransactionNestedInput> = z.object({
  create: z.union([ z.lazy(() => TransactionAttachmentCreateWithoutTransactionInputSchema),z.lazy(() => TransactionAttachmentCreateWithoutTransactionInputSchema).array(),z.lazy(() => TransactionAttachmentUncheckedCreateWithoutTransactionInputSchema),z.lazy(() => TransactionAttachmentUncheckedCreateWithoutTransactionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TransactionAttachmentCreateOrConnectWithoutTransactionInputSchema),z.lazy(() => TransactionAttachmentCreateOrConnectWithoutTransactionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TransactionAttachmentUpsertWithWhereUniqueWithoutTransactionInputSchema),z.lazy(() => TransactionAttachmentUpsertWithWhereUniqueWithoutTransactionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TransactionAttachmentCreateManyTransactionInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TransactionAttachmentWhereUniqueInputSchema),z.lazy(() => TransactionAttachmentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TransactionAttachmentWhereUniqueInputSchema),z.lazy(() => TransactionAttachmentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TransactionAttachmentWhereUniqueInputSchema),z.lazy(() => TransactionAttachmentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TransactionAttachmentWhereUniqueInputSchema),z.lazy(() => TransactionAttachmentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TransactionAttachmentUpdateWithWhereUniqueWithoutTransactionInputSchema),z.lazy(() => TransactionAttachmentUpdateWithWhereUniqueWithoutTransactionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TransactionAttachmentUpdateManyWithWhereWithoutTransactionInputSchema),z.lazy(() => TransactionAttachmentUpdateManyWithWhereWithoutTransactionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TransactionAttachmentScalarWhereInputSchema),z.lazy(() => TransactionAttachmentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TransactionAttachmentUpdateManyWithoutTransactionNestedInputSchema;
