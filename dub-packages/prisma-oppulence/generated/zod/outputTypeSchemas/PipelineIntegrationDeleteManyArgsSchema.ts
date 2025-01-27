import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PipelineIntegrationWhereInputSchema } from '../inputTypeSchemas/PipelineIntegrationWhereInputSchema'

export const PipelineIntegrationDeleteManyArgsSchema: z.ZodType<Prisma.PipelineIntegrationDeleteManyArgs> = z.object({
  where: PipelineIntegrationWhereInputSchema.optional(),
}).strict() ;

export default PipelineIntegrationDeleteManyArgsSchema;
