import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadComplianceAuditUpdateWithoutAuditHistoryInputSchema } from './LeadComplianceAuditUpdateWithoutAuditHistoryInputSchema';
import { LeadComplianceAuditUncheckedUpdateWithoutAuditHistoryInputSchema } from './LeadComplianceAuditUncheckedUpdateWithoutAuditHistoryInputSchema';
import { LeadComplianceAuditCreateWithoutAuditHistoryInputSchema } from './LeadComplianceAuditCreateWithoutAuditHistoryInputSchema';
import { LeadComplianceAuditUncheckedCreateWithoutAuditHistoryInputSchema } from './LeadComplianceAuditUncheckedCreateWithoutAuditHistoryInputSchema';
import { LeadComplianceAuditWhereInputSchema } from './LeadComplianceAuditWhereInputSchema';

export const LeadComplianceAuditUpsertWithoutAuditHistoryInputSchema: z.ZodType<Prisma.LeadComplianceAuditUpsertWithoutAuditHistoryInput> = z.object({
  update: z.union([ z.lazy(() => LeadComplianceAuditUpdateWithoutAuditHistoryInputSchema),z.lazy(() => LeadComplianceAuditUncheckedUpdateWithoutAuditHistoryInputSchema) ]),
  create: z.union([ z.lazy(() => LeadComplianceAuditCreateWithoutAuditHistoryInputSchema),z.lazy(() => LeadComplianceAuditUncheckedCreateWithoutAuditHistoryInputSchema) ]),
  where: z.lazy(() => LeadComplianceAuditWhereInputSchema).optional()
}).strict();

export default LeadComplianceAuditUpsertWithoutAuditHistoryInputSchema;
