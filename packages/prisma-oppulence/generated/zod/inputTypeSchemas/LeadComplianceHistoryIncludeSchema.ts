import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadComplianceAuditArgsSchema } from "../outputTypeSchemas/LeadComplianceAuditArgsSchema"

export const LeadComplianceHistoryIncludeSchema: z.ZodType<Prisma.LeadComplianceHistoryInclude> = z.object({
  complianceAudit: z.union([z.boolean(),z.lazy(() => LeadComplianceAuditArgsSchema)]).optional(),
}).strict()

export default LeadComplianceHistoryIncludeSchema;
