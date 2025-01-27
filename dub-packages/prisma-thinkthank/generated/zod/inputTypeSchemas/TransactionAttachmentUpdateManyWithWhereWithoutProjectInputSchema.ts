import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionAttachmentScalarWhereInputSchema } from './TransactionAttachmentScalarWhereInputSchema';
import { TransactionAttachmentUpdateManyMutationInputSchema } from './TransactionAttachmentUpdateManyMutationInputSchema';
import { TransactionAttachmentUncheckedUpdateManyWithoutProjectInputSchema } from './TransactionAttachmentUncheckedUpdateManyWithoutProjectInputSchema';

export const TransactionAttachmentUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.TransactionAttachmentUpdateManyWithWhereWithoutProjectInput> = z.object({
  where: z.lazy(() => TransactionAttachmentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TransactionAttachmentUpdateManyMutationInputSchema),z.lazy(() => TransactionAttachmentUncheckedUpdateManyWithoutProjectInputSchema) ]),
}).strict();

export default TransactionAttachmentUpdateManyWithWhereWithoutProjectInputSchema;
