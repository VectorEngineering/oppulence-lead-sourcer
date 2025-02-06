import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionAttachmentWhereUniqueInputSchema } from './TransactionAttachmentWhereUniqueInputSchema';
import { TransactionAttachmentCreateWithoutProjectInputSchema } from './TransactionAttachmentCreateWithoutProjectInputSchema';
import { TransactionAttachmentUncheckedCreateWithoutProjectInputSchema } from './TransactionAttachmentUncheckedCreateWithoutProjectInputSchema';

export const TransactionAttachmentCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.TransactionAttachmentCreateOrConnectWithoutProjectInput> = z.object({
  where: z.lazy(() => TransactionAttachmentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TransactionAttachmentCreateWithoutProjectInputSchema),z.lazy(() => TransactionAttachmentUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default TransactionAttachmentCreateOrConnectWithoutProjectInputSchema;
