import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LinkTagCreateManyInputSchema } from '../inputTypeSchemas/LinkTagCreateManyInputSchema'

export const LinkTagCreateManyArgsSchema: z.ZodType<Prisma.LinkTagCreateManyArgs> = z.object({
  data: z.union([ LinkTagCreateManyInputSchema,LinkTagCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default LinkTagCreateManyArgsSchema;
