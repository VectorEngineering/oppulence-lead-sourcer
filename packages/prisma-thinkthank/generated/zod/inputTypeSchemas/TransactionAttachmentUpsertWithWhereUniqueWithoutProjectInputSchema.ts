import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionAttachmentWhereUniqueInputSchema } from './TransactionAttachmentWhereUniqueInputSchema';
import { TransactionAttachmentUpdateWithoutProjectInputSchema } from './TransactionAttachmentUpdateWithoutProjectInputSchema';
import { TransactionAttachmentUncheckedUpdateWithoutProjectInputSchema } from './TransactionAttachmentUncheckedUpdateWithoutProjectInputSchema';
import { TransactionAttachmentCreateWithoutProjectInputSchema } from './TransactionAttachmentCreateWithoutProjectInputSchema';
import { TransactionAttachmentUncheckedCreateWithoutProjectInputSchema } from './TransactionAttachmentUncheckedCreateWithoutProjectInputSchema';

export const TransactionAttachmentUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.TransactionAttachmentUpsertWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => TransactionAttachmentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TransactionAttachmentUpdateWithoutProjectInputSchema),z.lazy(() => TransactionAttachmentUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => TransactionAttachmentCreateWithoutProjectInputSchema),z.lazy(() => TransactionAttachmentUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default TransactionAttachmentUpsertWithWhereUniqueWithoutProjectInputSchema;
