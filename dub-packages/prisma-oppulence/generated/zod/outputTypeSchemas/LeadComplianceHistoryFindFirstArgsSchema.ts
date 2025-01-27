import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadComplianceHistoryIncludeSchema } from '../inputTypeSchemas/LeadComplianceHistoryIncludeSchema'
import { LeadComplianceHistoryWhereInputSchema } from '../inputTypeSchemas/LeadComplianceHistoryWhereInputSchema'
import { LeadComplianceHistoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadComplianceHistoryOrderByWithRelationInputSchema'
import { LeadComplianceHistoryWhereUniqueInputSchema } from '../inputTypeSchemas/LeadComplianceHistoryWhereUniqueInputSchema'
import { LeadComplianceHistoryScalarFieldEnumSchema } from '../inputTypeSchemas/LeadComplianceHistoryScalarFieldEnumSchema'
import { LeadComplianceAuditArgsSchema } from "../outputTypeSchemas/LeadComplianceAuditArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadComplianceHistorySelectSchema: z.ZodType<Prisma.LeadComplianceHistorySelect> = z.object({
  id: z.boolean().optional(),
  complianceAuditId: z.boolean().optional(),
  action: z.boolean().optional(),
  status: z.boolean().optional(),
  notes: z.boolean().optional(),
  performedBy: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  complianceAudit: z.union([z.boolean(),z.lazy(() => LeadComplianceAuditArgsSchema)]).optional(),
}).strict()

export const LeadComplianceHistoryFindFirstArgsSchema: z.ZodType<Prisma.LeadComplianceHistoryFindFirstArgs> = z.object({
  select: LeadComplianceHistorySelectSchema.optional(),
  include: LeadComplianceHistoryIncludeSchema.optional(),
  where: LeadComplianceHistoryWhereInputSchema.optional(),
  orderBy: z.union([ LeadComplianceHistoryOrderByWithRelationInputSchema.array(),LeadComplianceHistoryOrderByWithRelationInputSchema ]).optional(),
  cursor: LeadComplianceHistoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LeadComplianceHistoryScalarFieldEnumSchema,LeadComplianceHistoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default LeadComplianceHistoryFindFirstArgsSchema;
