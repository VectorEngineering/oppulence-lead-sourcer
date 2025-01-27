import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IntegrationUpdateManyMutationInputSchema } from '../inputTypeSchemas/IntegrationUpdateManyMutationInputSchema'
import { IntegrationUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/IntegrationUncheckedUpdateManyInputSchema'
import { IntegrationWhereInputSchema } from '../inputTypeSchemas/IntegrationWhereInputSchema'

export const IntegrationUpdateManyArgsSchema: z.ZodType<Prisma.IntegrationUpdateManyArgs> = z.object({
  data: z.union([ IntegrationUpdateManyMutationInputSchema,IntegrationUncheckedUpdateManyInputSchema ]),
  where: IntegrationWhereInputSchema.optional(),
}).strict() ;

export default IntegrationUpdateManyArgsSchema;
