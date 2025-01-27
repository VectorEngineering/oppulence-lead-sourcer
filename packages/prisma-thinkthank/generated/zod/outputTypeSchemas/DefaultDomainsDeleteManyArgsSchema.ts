import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DefaultDomainsWhereInputSchema } from '../inputTypeSchemas/DefaultDomainsWhereInputSchema'

export const DefaultDomainsDeleteManyArgsSchema: z.ZodType<Prisma.DefaultDomainsDeleteManyArgs> = z.object({
  where: DefaultDomainsWhereInputSchema.optional(),
}).strict() ;

export default DefaultDomainsDeleteManyArgsSchema;
