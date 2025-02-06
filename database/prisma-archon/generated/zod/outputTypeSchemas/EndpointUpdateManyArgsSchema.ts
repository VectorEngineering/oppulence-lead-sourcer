import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EndpointUpdateManyMutationInputSchema } from '../inputTypeSchemas/EndpointUpdateManyMutationInputSchema'
import { EndpointUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/EndpointUncheckedUpdateManyInputSchema'
import { EndpointWhereInputSchema } from '../inputTypeSchemas/EndpointWhereInputSchema'

export const EndpointUpdateManyArgsSchema: z.ZodType<Prisma.EndpointUpdateManyArgs> = z.object({
  data: z.union([ EndpointUpdateManyMutationInputSchema,EndpointUncheckedUpdateManyInputSchema ]),
  where: EndpointWhereInputSchema.optional(),
}).strict() ;

export default EndpointUpdateManyArgsSchema;
