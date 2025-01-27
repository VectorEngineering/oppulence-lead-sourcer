import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PipelineIntegrationIncludeSchema } from '../inputTypeSchemas/PipelineIntegrationIncludeSchema'
import { PipelineIntegrationUpdateInputSchema } from '../inputTypeSchemas/PipelineIntegrationUpdateInputSchema'
import { PipelineIntegrationUncheckedUpdateInputSchema } from '../inputTypeSchemas/PipelineIntegrationUncheckedUpdateInputSchema'
import { PipelineIntegrationWhereUniqueInputSchema } from '../inputTypeSchemas/PipelineIntegrationWhereUniqueInputSchema'
import { PipelineArgsSchema } from "../outputTypeSchemas/PipelineArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PipelineIntegrationSelectSchema: z.ZodType<Prisma.PipelineIntegrationSelect> = z.object({
  id: z.boolean().optional(),
  pipelineId: z.boolean().optional(),
  type: z.boolean().optional(),
  name: z.boolean().optional(),
  provider: z.boolean().optional(),
  config: z.boolean().optional(),
  isActive: z.boolean().optional(),
  lastSyncedAt: z.boolean().optional(),
  pipeline: z.union([z.boolean(),z.lazy(() => PipelineArgsSchema)]).optional(),
}).strict()

export const PipelineIntegrationUpdateArgsSchema: z.ZodType<Prisma.PipelineIntegrationUpdateArgs> = z.object({
  select: PipelineIntegrationSelectSchema.optional(),
  include: PipelineIntegrationIncludeSchema.optional(),
  data: z.union([ PipelineIntegrationUpdateInputSchema,PipelineIntegrationUncheckedUpdateInputSchema ]),
  where: PipelineIntegrationWhereUniqueInputSchema,
}).strict() ;

export default PipelineIntegrationUpdateArgsSchema;
