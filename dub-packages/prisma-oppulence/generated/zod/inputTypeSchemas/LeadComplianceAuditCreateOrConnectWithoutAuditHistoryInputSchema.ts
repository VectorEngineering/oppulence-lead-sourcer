import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadComplianceAuditWhereUniqueInputSchema } from './LeadComplianceAuditWhereUniqueInputSchema';
import { LeadComplianceAuditCreateWithoutAuditHistoryInputSchema } from './LeadComplianceAuditCreateWithoutAuditHistoryInputSchema';
import { LeadComplianceAuditUncheckedCreateWithoutAuditHistoryInputSchema } from './LeadComplianceAuditUncheckedCreateWithoutAuditHistoryInputSchema';

export const LeadComplianceAuditCreateOrConnectWithoutAuditHistoryInputSchema: z.ZodType<Prisma.LeadComplianceAuditCreateOrConnectWithoutAuditHistoryInput> = z.object({
  where: z.lazy(() => LeadComplianceAuditWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadComplianceAuditCreateWithoutAuditHistoryInputSchema),z.lazy(() => LeadComplianceAuditUncheckedCreateWithoutAuditHistoryInputSchema) ]),
}).strict();

export default LeadComplianceAuditCreateOrConnectWithoutAuditHistoryInputSchema;
