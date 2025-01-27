import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PipelineIntegrationWhereInputSchema } from '../inputTypeSchemas/PipelineIntegrationWhereInputSchema'
import { PipelineIntegrationOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PipelineIntegrationOrderByWithAggregationInputSchema'
import { PipelineIntegrationScalarFieldEnumSchema } from '../inputTypeSchemas/PipelineIntegrationScalarFieldEnumSchema'
import { PipelineIntegrationScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PipelineIntegrationScalarWhereWithAggregatesInputSchema'

export const PipelineIntegrationGroupByArgsSchema: z.ZodType<Prisma.PipelineIntegrationGroupByArgs> = z.object({
  where: PipelineIntegrationWhereInputSchema.optional(),
  orderBy: z.union([ PipelineIntegrationOrderByWithAggregationInputSchema.array(),PipelineIntegrationOrderByWithAggregationInputSchema ]).optional(),
  by: PipelineIntegrationScalarFieldEnumSchema.array(),
  having: PipelineIntegrationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default PipelineIntegrationGroupByArgsSchema;
