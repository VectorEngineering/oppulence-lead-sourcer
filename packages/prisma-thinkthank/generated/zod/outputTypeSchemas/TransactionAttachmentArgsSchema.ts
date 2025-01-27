import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TransactionAttachmentSelectSchema } from '../inputTypeSchemas/TransactionAttachmentSelectSchema';
import { TransactionAttachmentIncludeSchema } from '../inputTypeSchemas/TransactionAttachmentIncludeSchema';

export const TransactionAttachmentArgsSchema: z.ZodType<Prisma.TransactionAttachmentDefaultArgs> = z.object({
  select: z.lazy(() => TransactionAttachmentSelectSchema).optional(),
  include: z.lazy(() => TransactionAttachmentIncludeSchema).optional(),
}).strict();

export default TransactionAttachmentArgsSchema;
