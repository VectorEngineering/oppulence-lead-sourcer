import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadComplianceHistoryWhereInputSchema } from '../inputTypeSchemas/LeadComplianceHistoryWhereInputSchema'
import { LeadComplianceHistoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadComplianceHistoryOrderByWithRelationInputSchema'
import { LeadComplianceHistoryWhereUniqueInputSchema } from '../inputTypeSchemas/LeadComplianceHistoryWhereUniqueInputSchema'

export const LeadComplianceHistoryAggregateArgsSchema: z.ZodType<Prisma.LeadComplianceHistoryAggregateArgs> = z.object({
  where: LeadComplianceHistoryWhereInputSchema.optional(),
  orderBy: z.union([ LeadComplianceHistoryOrderByWithRelationInputSchema.array(),LeadComplianceHistoryOrderByWithRelationInputSchema ]).optional(),
  cursor: LeadComplianceHistoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadComplianceHistoryAggregateArgsSchema;
