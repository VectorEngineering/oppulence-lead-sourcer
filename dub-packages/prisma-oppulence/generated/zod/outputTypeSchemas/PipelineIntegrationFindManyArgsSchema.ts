import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PipelineIntegrationIncludeSchema } from '../inputTypeSchemas/PipelineIntegrationIncludeSchema'
import { PipelineIntegrationWhereInputSchema } from '../inputTypeSchemas/PipelineIntegrationWhereInputSchema'
import { PipelineIntegrationOrderByWithRelationInputSchema } from '../inputTypeSchemas/PipelineIntegrationOrderByWithRelationInputSchema'
import { PipelineIntegrationWhereUniqueInputSchema } from '../inputTypeSchemas/PipelineIntegrationWhereUniqueInputSchema'
import { PipelineIntegrationScalarFieldEnumSchema } from '../inputTypeSchemas/PipelineIntegrationScalarFieldEnumSchema'
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

export const PipelineIntegrationFindManyArgsSchema: z.ZodType<Prisma.PipelineIntegrationFindManyArgs> = z.object({
  select: PipelineIntegrationSelectSchema.optional(),
  include: PipelineIntegrationIncludeSchema.optional(),
  where: PipelineIntegrationWhereInputSchema.optional(),
  orderBy: z.union([ PipelineIntegrationOrderByWithRelationInputSchema.array(),PipelineIntegrationOrderByWithRelationInputSchema ]).optional(),
  cursor: PipelineIntegrationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PipelineIntegrationScalarFieldEnumSchema,PipelineIntegrationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default PipelineIntegrationFindManyArgsSchema;
