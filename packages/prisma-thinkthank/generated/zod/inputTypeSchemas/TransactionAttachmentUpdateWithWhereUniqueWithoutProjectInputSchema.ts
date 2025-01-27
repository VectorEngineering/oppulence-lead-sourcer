import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionAttachmentWhereUniqueInputSchema } from './TransactionAttachmentWhereUniqueInputSchema';
import { TransactionAttachmentUpdateWithoutProjectInputSchema } from './TransactionAttachmentUpdateWithoutProjectInputSchema';
import { TransactionAttachmentUncheckedUpdateWithoutProjectInputSchema } from './TransactionAttachmentUncheckedUpdateWithoutProjectInputSchema';

export const TransactionAttachmentUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.TransactionAttachmentUpdateWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => TransactionAttachmentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TransactionAttachmentUpdateWithoutProjectInputSchema),z.lazy(() => TransactionAttachmentUncheckedUpdateWithoutProjectInputSchema) ]),
}).strict();

export default TransactionAttachmentUpdateWithWhereUniqueWithoutProjectInputSchema;
