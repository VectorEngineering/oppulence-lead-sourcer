import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerTagUpdateManyMutationInputSchema } from '../inputTypeSchemas/CustomerTagUpdateManyMutationInputSchema'
import { CustomerTagUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/CustomerTagUncheckedUpdateManyInputSchema'
import { CustomerTagWhereInputSchema } from '../inputTypeSchemas/CustomerTagWhereInputSchema'

export const CustomerTagUpdateManyArgsSchema: z.ZodType<Prisma.CustomerTagUpdateManyArgs> = z.object({
  data: z.union([ CustomerTagUpdateManyMutationInputSchema,CustomerTagUncheckedUpdateManyInputSchema ]),
  where: CustomerTagWhereInputSchema.optional(),
}).strict() ;

export default CustomerTagUpdateManyArgsSchema;
