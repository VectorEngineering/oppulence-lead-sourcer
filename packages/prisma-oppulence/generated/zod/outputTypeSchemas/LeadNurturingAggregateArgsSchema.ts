import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadNurturingWhereInputSchema } from '../inputTypeSchemas/LeadNurturingWhereInputSchema'
import { LeadNurturingOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadNurturingOrderByWithRelationInputSchema'
import { LeadNurturingWhereUniqueInputSchema } from '../inputTypeSchemas/LeadNurturingWhereUniqueInputSchema'

export const LeadNurturingAggregateArgsSchema: z.ZodType<Prisma.LeadNurturingAggregateArgs> = z.object({
  where: LeadNurturingWhereInputSchema.optional(),
  orderBy: z.union([ LeadNurturingOrderByWithRelationInputSchema.array(),LeadNurturingOrderByWithRelationInputSchema ]).optional(),
  cursor: LeadNurturingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadNurturingAggregateArgsSchema;
