import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TransactionAttachmentCreateManyInputSchema } from '../inputTypeSchemas/TransactionAttachmentCreateManyInputSchema'

export const TransactionAttachmentCreateManyArgsSchema: z.ZodType<Prisma.TransactionAttachmentCreateManyArgs> = z.object({
  data: z.union([ TransactionAttachmentCreateManyInputSchema,TransactionAttachmentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default TransactionAttachmentCreateManyArgsSchema;
