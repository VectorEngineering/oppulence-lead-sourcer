import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadComplianceAuditWhereInputSchema } from './LeadComplianceAuditWhereInputSchema';

export const LeadComplianceAuditListRelationFilterSchema: z.ZodType<Prisma.LeadComplianceAuditListRelationFilter> = z.object({
  every: z.lazy(() => LeadComplianceAuditWhereInputSchema).optional(),
  some: z.lazy(() => LeadComplianceAuditWhereInputSchema).optional(),
  none: z.lazy(() => LeadComplianceAuditWhereInputSchema).optional()
}).strict();

export default LeadComplianceAuditListRelationFilterSchema;
