import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DefaultDomainsUpdateManyMutationInputSchema } from '../inputTypeSchemas/DefaultDomainsUpdateManyMutationInputSchema'
import { DefaultDomainsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DefaultDomainsUncheckedUpdateManyInputSchema'
import { DefaultDomainsWhereInputSchema } from '../inputTypeSchemas/DefaultDomainsWhereInputSchema'

export const DefaultDomainsUpdateManyArgsSchema: z.ZodType<Prisma.DefaultDomainsUpdateManyArgs> = z.object({
  data: z.union([ DefaultDomainsUpdateManyMutationInputSchema,DefaultDomainsUncheckedUpdateManyInputSchema ]),
  where: DefaultDomainsWhereInputSchema.optional(),
}).strict() ;

export default DefaultDomainsUpdateManyArgsSchema;
