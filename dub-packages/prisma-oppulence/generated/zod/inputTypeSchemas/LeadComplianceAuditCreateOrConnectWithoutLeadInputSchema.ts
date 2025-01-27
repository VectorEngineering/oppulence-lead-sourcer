import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadComplianceAuditWhereUniqueInputSchema } from './LeadComplianceAuditWhereUniqueInputSchema';
import { LeadComplianceAuditCreateWithoutLeadInputSchema } from './LeadComplianceAuditCreateWithoutLeadInputSchema';
import { LeadComplianceAuditUncheckedCreateWithoutLeadInputSchema } from './LeadComplianceAuditUncheckedCreateWithoutLeadInputSchema';

export const LeadComplianceAuditCreateOrConnectWithoutLeadInputSchema: z.ZodType<Prisma.LeadComplianceAuditCreateOrConnectWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadComplianceAuditWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadComplianceAuditCreateWithoutLeadInputSchema),z.lazy(() => LeadComplianceAuditUncheckedCreateWithoutLeadInputSchema) ]),
}).strict();

export default LeadComplianceAuditCreateOrConnectWithoutLeadInputSchema;
