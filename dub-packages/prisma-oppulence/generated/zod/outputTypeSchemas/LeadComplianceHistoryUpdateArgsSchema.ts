import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadComplianceHistoryIncludeSchema } from '../inputTypeSchemas/LeadComplianceHistoryIncludeSchema'
import { LeadComplianceHistoryUpdateInputSchema } from '../inputTypeSchemas/LeadComplianceHistoryUpdateInputSchema'
import { LeadComplianceHistoryUncheckedUpdateInputSchema } from '../inputTypeSchemas/LeadComplianceHistoryUncheckedUpdateInputSchema'
import { LeadComplianceHistoryWhereUniqueInputSchema } from '../inputTypeSchemas/LeadComplianceHistoryWhereUniqueInputSchema'
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

export const LeadComplianceHistoryUpdateArgsSchema: z.ZodType<Prisma.LeadComplianceHistoryUpdateArgs> = z.object({
  select: LeadComplianceHistorySelectSchema.optional(),
  include: LeadComplianceHistoryIncludeSchema.optional(),
  data: z.union([ LeadComplianceHistoryUpdateInputSchema,LeadComplianceHistoryUncheckedUpdateInputSchema ]),
  where: LeadComplianceHistoryWhereUniqueInputSchema,
}).strict() ;

export default LeadComplianceHistoryUpdateArgsSchema;
