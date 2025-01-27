import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadComplianceHistoryWhereUniqueInputSchema } from './LeadComplianceHistoryWhereUniqueInputSchema';
import { LeadComplianceHistoryUpdateWithoutComplianceAuditInputSchema } from './LeadComplianceHistoryUpdateWithoutComplianceAuditInputSchema';
import { LeadComplianceHistoryUncheckedUpdateWithoutComplianceAuditInputSchema } from './LeadComplianceHistoryUncheckedUpdateWithoutComplianceAuditInputSchema';
import { LeadComplianceHistoryCreateWithoutComplianceAuditInputSchema } from './LeadComplianceHistoryCreateWithoutComplianceAuditInputSchema';
import { LeadComplianceHistoryUncheckedCreateWithoutComplianceAuditInputSchema } from './LeadComplianceHistoryUncheckedCreateWithoutComplianceAuditInputSchema';

export const LeadComplianceHistoryUpsertWithWhereUniqueWithoutComplianceAuditInputSchema: z.ZodType<Prisma.LeadComplianceHistoryUpsertWithWhereUniqueWithoutComplianceAuditInput> = z.object({
  where: z.lazy(() => LeadComplianceHistoryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LeadComplianceHistoryUpdateWithoutComplianceAuditInputSchema),z.lazy(() => LeadComplianceHistoryUncheckedUpdateWithoutComplianceAuditInputSchema) ]),
  create: z.union([ z.lazy(() => LeadComplianceHistoryCreateWithoutComplianceAuditInputSchema),z.lazy(() => LeadComplianceHistoryUncheckedCreateWithoutComplianceAuditInputSchema) ]),
}).strict();

export default LeadComplianceHistoryUpsertWithWhereUniqueWithoutComplianceAuditInputSchema;
