import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PipelineIntegrationUpdateManyMutationInputSchema } from '../inputTypeSchemas/PipelineIntegrationUpdateManyMutationInputSchema'
import { PipelineIntegrationUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PipelineIntegrationUncheckedUpdateManyInputSchema'
import { PipelineIntegrationWhereInputSchema } from '../inputTypeSchemas/PipelineIntegrationWhereInputSchema'

export const PipelineIntegrationUpdateManyArgsSchema: z.ZodType<Prisma.PipelineIntegrationUpdateManyArgs> = z.object({
  data: z.union([ PipelineIntegrationUpdateManyMutationInputSchema,PipelineIntegrationUncheckedUpdateManyInputSchema ]),
  where: PipelineIntegrationWhereInputSchema.optional(),
}).strict() ;

export default PipelineIntegrationUpdateManyArgsSchema;
