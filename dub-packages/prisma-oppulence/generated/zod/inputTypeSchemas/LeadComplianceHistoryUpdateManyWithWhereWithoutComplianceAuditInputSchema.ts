import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadComplianceHistoryScalarWhereInputSchema } from './LeadComplianceHistoryScalarWhereInputSchema';
import { LeadComplianceHistoryUpdateManyMutationInputSchema } from './LeadComplianceHistoryUpdateManyMutationInputSchema';
import { LeadComplianceHistoryUncheckedUpdateManyWithoutComplianceAuditInputSchema } from './LeadComplianceHistoryUncheckedUpdateManyWithoutComplianceAuditInputSchema';

export const LeadComplianceHistoryUpdateManyWithWhereWithoutComplianceAuditInputSchema: z.ZodType<Prisma.LeadComplianceHistoryUpdateManyWithWhereWithoutComplianceAuditInput> = z.object({
  where: z.lazy(() => LeadComplianceHistoryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LeadComplianceHistoryUpdateManyMutationInputSchema),z.lazy(() => LeadComplianceHistoryUncheckedUpdateManyWithoutComplianceAuditInputSchema) ]),
}).strict();

export default LeadComplianceHistoryUpdateManyWithWhereWithoutComplianceAuditInputSchema;
