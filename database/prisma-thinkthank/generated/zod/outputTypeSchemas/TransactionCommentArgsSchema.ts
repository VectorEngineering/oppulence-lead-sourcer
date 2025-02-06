import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TransactionCommentSelectSchema } from '../inputTypeSchemas/TransactionCommentSelectSchema';
import { TransactionCommentIncludeSchema } from '../inputTypeSchemas/TransactionCommentIncludeSchema';

export const TransactionCommentArgsSchema: z.ZodType<Prisma.TransactionCommentDefaultArgs> = z.object({
  select: z.lazy(() => TransactionCommentSelectSchema).optional(),
  include: z.lazy(() => TransactionCommentIncludeSchema).optional(),
}).strict();

export default TransactionCommentArgsSchema;
