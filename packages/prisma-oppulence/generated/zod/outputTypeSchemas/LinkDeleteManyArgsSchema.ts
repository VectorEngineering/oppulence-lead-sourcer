import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LinkWhereInputSchema } from '../inputTypeSchemas/LinkWhereInputSchema'

export const LinkDeleteManyArgsSchema: z.ZodType<Prisma.LinkDeleteManyArgs> = z.object({
  where: LinkWhereInputSchema.optional(),
}).strict() ;

export default LinkDeleteManyArgsSchema;
