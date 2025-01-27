import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadComplianceHistoryWhereUniqueInputSchema } from './LeadComplianceHistoryWhereUniqueInputSchema';
import { LeadComplianceHistoryUpdateWithoutComplianceAuditInputSchema } from './LeadComplianceHistoryUpdateWithoutComplianceAuditInputSchema';
import { LeadComplianceHistoryUncheckedUpdateWithoutComplianceAuditInputSchema } from './LeadComplianceHistoryUncheckedUpdateWithoutComplianceAuditInputSchema';

export const LeadComplianceHistoryUpdateWithWhereUniqueWithoutComplianceAuditInputSchema: z.ZodType<Prisma.LeadComplianceHistoryUpdateWithWhereUniqueWithoutComplianceAuditInput> = z.object({
  where: z.lazy(() => LeadComplianceHistoryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LeadComplianceHistoryUpdateWithoutComplianceAuditInputSchema),z.lazy(() => LeadComplianceHistoryUncheckedUpdateWithoutComplianceAuditInputSchema) ]),
}).strict();

export default LeadComplianceHistoryUpdateWithWhereUniqueWithoutComplianceAuditInputSchema;
