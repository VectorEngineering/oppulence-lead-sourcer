import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IntegrationWhereInputSchema } from '../inputTypeSchemas/IntegrationWhereInputSchema'
import { IntegrationOrderByWithAggregationInputSchema } from '../inputTypeSchemas/IntegrationOrderByWithAggregationInputSchema'
import { IntegrationScalarFieldEnumSchema } from '../inputTypeSchemas/IntegrationScalarFieldEnumSchema'
import { IntegrationScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/IntegrationScalarWhereWithAggregatesInputSchema'

export const IntegrationGroupByArgsSchema: z.ZodType<Prisma.IntegrationGroupByArgs> = z.object({
  where: IntegrationWhereInputSchema.optional(),
  orderBy: z.union([ IntegrationOrderByWithAggregationInputSchema.array(),IntegrationOrderByWithAggregationInputSchema ]).optional(),
  by: IntegrationScalarFieldEnumSchema.array(),
  having: IntegrationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default IntegrationGroupByArgsSchema;
