import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InstalledIntegrationWhereInputSchema } from '../inputTypeSchemas/InstalledIntegrationWhereInputSchema'
import { InstalledIntegrationOrderByWithRelationInputSchema } from '../inputTypeSchemas/InstalledIntegrationOrderByWithRelationInputSchema'
import { InstalledIntegrationWhereUniqueInputSchema } from '../inputTypeSchemas/InstalledIntegrationWhereUniqueInputSchema'

export const InstalledIntegrationAggregateArgsSchema: z.ZodType<Prisma.InstalledIntegrationAggregateArgs> = z.object({
  where: InstalledIntegrationWhereInputSchema.optional(),
  orderBy: z.union([ InstalledIntegrationOrderByWithRelationInputSchema.array(),InstalledIntegrationOrderByWithRelationInputSchema ]).optional(),
  cursor: InstalledIntegrationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default InstalledIntegrationAggregateArgsSchema;
