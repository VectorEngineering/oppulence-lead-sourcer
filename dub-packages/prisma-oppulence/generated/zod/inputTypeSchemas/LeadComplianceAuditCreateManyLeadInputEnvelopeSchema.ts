import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadComplianceAuditCreateManyLeadInputSchema } from './LeadComplianceAuditCreateManyLeadInputSchema';

export const LeadComplianceAuditCreateManyLeadInputEnvelopeSchema: z.ZodType<Prisma.LeadComplianceAuditCreateManyLeadInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => LeadComplianceAuditCreateManyLeadInputSchema),z.lazy(() => LeadComplianceAuditCreateManyLeadInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default LeadComplianceAuditCreateManyLeadInputEnvelopeSchema;
