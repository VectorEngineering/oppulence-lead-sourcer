import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionAttachmentWhereUniqueInputSchema } from './TransactionAttachmentWhereUniqueInputSchema';
import { TransactionAttachmentCreateWithoutInboxInputSchema } from './TransactionAttachmentCreateWithoutInboxInputSchema';
import { TransactionAttachmentUncheckedCreateWithoutInboxInputSchema } from './TransactionAttachmentUncheckedCreateWithoutInboxInputSchema';

export const TransactionAttachmentCreateOrConnectWithoutInboxInputSchema: z.ZodType<Prisma.TransactionAttachmentCreateOrConnectWithoutInboxInput> = z.object({
  where: z.lazy(() => TransactionAttachmentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TransactionAttachmentCreateWithoutInboxInputSchema),z.lazy(() => TransactionAttachmentUncheckedCreateWithoutInboxInputSchema) ]),
}).strict();

export default TransactionAttachmentCreateOrConnectWithoutInboxInputSchema;
