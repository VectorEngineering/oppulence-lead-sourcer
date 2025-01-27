import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadComplianceAuditCreateWithoutAuditHistoryInputSchema } from './LeadComplianceAuditCreateWithoutAuditHistoryInputSchema';
import { LeadComplianceAuditUncheckedCreateWithoutAuditHistoryInputSchema } from './LeadComplianceAuditUncheckedCreateWithoutAuditHistoryInputSchema';
import { LeadComplianceAuditCreateOrConnectWithoutAuditHistoryInputSchema } from './LeadComplianceAuditCreateOrConnectWithoutAuditHistoryInputSchema';
import { LeadComplianceAuditWhereUniqueInputSchema } from './LeadComplianceAuditWhereUniqueInputSchema';

export const LeadComplianceAuditCreateNestedOneWithoutAuditHistoryInputSchema: z.ZodType<Prisma.LeadComplianceAuditCreateNestedOneWithoutAuditHistoryInput> = z.object({
  create: z.union([ z.lazy(() => LeadComplianceAuditCreateWithoutAuditHistoryInputSchema),z.lazy(() => LeadComplianceAuditUncheckedCreateWithoutAuditHistoryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LeadComplianceAuditCreateOrConnectWithoutAuditHistoryInputSchema).optional(),
  connect: z.lazy(() => LeadComplianceAuditWhereUniqueInputSchema).optional()
}).strict();

export default LeadComplianceAuditCreateNestedOneWithoutAuditHistoryInputSchema;
