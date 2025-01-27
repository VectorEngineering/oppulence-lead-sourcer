import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InboxShareCreateManyInputSchema } from '../inputTypeSchemas/InboxShareCreateManyInputSchema'

export const InboxShareCreateManyArgsSchema: z.ZodType<Prisma.InboxShareCreateManyArgs> = z.object({
  data: z.union([ InboxShareCreateManyInputSchema,InboxShareCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default InboxShareCreateManyArgsSchema;
