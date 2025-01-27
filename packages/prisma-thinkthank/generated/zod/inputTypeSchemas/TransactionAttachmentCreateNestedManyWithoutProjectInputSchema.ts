import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionAttachmentCreateWithoutProjectInputSchema } from './TransactionAttachmentCreateWithoutProjectInputSchema';
import { TransactionAttachmentUncheckedCreateWithoutProjectInputSchema } from './TransactionAttachmentUncheckedCreateWithoutProjectInputSchema';
import { TransactionAttachmentCreateOrConnectWithoutProjectInputSchema } from './TransactionAttachmentCreateOrConnectWithoutProjectInputSchema';
import { TransactionAttachmentCreateManyProjectInputEnvelopeSchema } from './TransactionAttachmentCreateManyProjectInputEnvelopeSchema';
import { TransactionAttachmentWhereUniqueInputSchema } from './TransactionAttachmentWhereUniqueInputSchema';

export const TransactionAttachmentCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.TransactionAttachmentCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => TransactionAttachmentCreateWithoutProjectInputSchema),z.lazy(() => TransactionAttachmentCreateWithoutProjectInputSchema).array(),z.lazy(() => TransactionAttachmentUncheckedCreateWithoutProjectInputSchema),z.lazy(() => TransactionAttachmentUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TransactionAttachmentCreateOrConnectWithoutProjectInputSchema),z.lazy(() => TransactionAttachmentCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TransactionAttachmentCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TransactionAttachmentWhereUniqueInputSchema),z.lazy(() => TransactionAttachmentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TransactionAttachmentCreateNestedManyWithoutProjectInputSchema;
