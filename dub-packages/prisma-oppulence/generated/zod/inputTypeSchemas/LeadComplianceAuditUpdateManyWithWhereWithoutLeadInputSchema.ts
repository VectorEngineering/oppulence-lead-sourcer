import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadComplianceAuditScalarWhereInputSchema } from './LeadComplianceAuditScalarWhereInputSchema';
import { LeadComplianceAuditUpdateManyMutationInputSchema } from './LeadComplianceAuditUpdateManyMutationInputSchema';
import { LeadComplianceAuditUncheckedUpdateManyWithoutLeadInputSchema } from './LeadComplianceAuditUncheckedUpdateManyWithoutLeadInputSchema';

export const LeadComplianceAuditUpdateManyWithWhereWithoutLeadInputSchema: z.ZodType<Prisma.LeadComplianceAuditUpdateManyWithWhereWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadComplianceAuditScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LeadComplianceAuditUpdateManyMutationInputSchema),z.lazy(() => LeadComplianceAuditUncheckedUpdateManyWithoutLeadInputSchema) ]),
}).strict();

export default LeadComplianceAuditUpdateManyWithWhereWithoutLeadInputSchema;
