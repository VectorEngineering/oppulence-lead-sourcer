import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadComplianceAuditCountOutputTypeSelectSchema } from './LeadComplianceAuditCountOutputTypeSelectSchema';

export const LeadComplianceAuditCountOutputTypeArgsSchema: z.ZodType<Prisma.LeadComplianceAuditCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => LeadComplianceAuditCountOutputTypeSelectSchema).nullish(),
}).strict();

export default LeadComplianceAuditCountOutputTypeSelectSchema;
