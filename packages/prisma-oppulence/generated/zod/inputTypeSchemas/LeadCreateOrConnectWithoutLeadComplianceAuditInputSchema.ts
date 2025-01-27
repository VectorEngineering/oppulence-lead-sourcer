import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadCreateWithoutLeadComplianceAuditInputSchema } from './LeadCreateWithoutLeadComplianceAuditInputSchema';
import { LeadUncheckedCreateWithoutLeadComplianceAuditInputSchema } from './LeadUncheckedCreateWithoutLeadComplianceAuditInputSchema';

export const LeadCreateOrConnectWithoutLeadComplianceAuditInputSchema: z.ZodType<Prisma.LeadCreateOrConnectWithoutLeadComplianceAuditInput> = z.object({
  where: z.lazy(() => LeadWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadCreateWithoutLeadComplianceAuditInputSchema),z.lazy(() => LeadUncheckedCreateWithoutLeadComplianceAuditInputSchema) ]),
}).strict();

export default LeadCreateOrConnectWithoutLeadComplianceAuditInputSchema;
