import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadComplianceAuditWhereUniqueInputSchema } from './LeadComplianceAuditWhereUniqueInputSchema';
import { LeadComplianceAuditUpdateWithoutLeadInputSchema } from './LeadComplianceAuditUpdateWithoutLeadInputSchema';
import { LeadComplianceAuditUncheckedUpdateWithoutLeadInputSchema } from './LeadComplianceAuditUncheckedUpdateWithoutLeadInputSchema';
import { LeadComplianceAuditCreateWithoutLeadInputSchema } from './LeadComplianceAuditCreateWithoutLeadInputSchema';
import { LeadComplianceAuditUncheckedCreateWithoutLeadInputSchema } from './LeadComplianceAuditUncheckedCreateWithoutLeadInputSchema';

export const LeadComplianceAuditUpsertWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadComplianceAuditUpsertWithWhereUniqueWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadComplianceAuditWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LeadComplianceAuditUpdateWithoutLeadInputSchema),z.lazy(() => LeadComplianceAuditUncheckedUpdateWithoutLeadInputSchema) ]),
  create: z.union([ z.lazy(() => LeadComplianceAuditCreateWithoutLeadInputSchema),z.lazy(() => LeadComplianceAuditUncheckedCreateWithoutLeadInputSchema) ]),
}).strict();

export default LeadComplianceAuditUpsertWithWhereUniqueWithoutLeadInputSchema;
