import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InboxActivityCreateManyInputSchema } from '../inputTypeSchemas/InboxActivityCreateManyInputSchema'

export const InboxActivityCreateManyArgsSchema: z.ZodType<Prisma.InboxActivityCreateManyArgs> = z.object({
  data: z.union([ InboxActivityCreateManyInputSchema,InboxActivityCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default InboxActivityCreateManyArgsSchema;
