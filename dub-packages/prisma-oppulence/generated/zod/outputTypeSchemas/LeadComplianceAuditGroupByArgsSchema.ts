import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadComplianceAuditWhereInputSchema } from '../inputTypeSchemas/LeadComplianceAuditWhereInputSchema'
import { LeadComplianceAuditOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LeadComplianceAuditOrderByWithAggregationInputSchema'
import { LeadComplianceAuditScalarFieldEnumSchema } from '../inputTypeSchemas/LeadComplianceAuditScalarFieldEnumSchema'
import { LeadComplianceAuditScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LeadComplianceAuditScalarWhereWithAggregatesInputSchema'

export const LeadComplianceAuditGroupByArgsSchema: z.ZodType<Prisma.LeadComplianceAuditGroupByArgs> = z.object({
  where: LeadComplianceAuditWhereInputSchema.optional(),
  orderBy: z.union([ LeadComplianceAuditOrderByWithAggregationInputSchema.array(),LeadComplianceAuditOrderByWithAggregationInputSchema ]).optional(),
  by: LeadComplianceAuditScalarFieldEnumSchema.array(),
  having: LeadComplianceAuditScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadComplianceAuditGroupByArgsSchema;
