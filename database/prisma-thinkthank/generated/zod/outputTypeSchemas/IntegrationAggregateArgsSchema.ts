import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IntegrationWhereInputSchema } from '../inputTypeSchemas/IntegrationWhereInputSchema'
import { IntegrationOrderByWithRelationInputSchema } from '../inputTypeSchemas/IntegrationOrderByWithRelationInputSchema'
import { IntegrationWhereUniqueInputSchema } from '../inputTypeSchemas/IntegrationWhereUniqueInputSchema'

export const IntegrationAggregateArgsSchema: z.ZodType<Prisma.IntegrationAggregateArgs> = z.object({
  where: IntegrationWhereInputSchema.optional(),
  orderBy: z.union([ IntegrationOrderByWithRelationInputSchema.array(),IntegrationOrderByWithRelationInputSchema ]).optional(),
  cursor: IntegrationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default IntegrationAggregateArgsSchema;
