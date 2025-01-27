import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCreateWithoutLeadComplianceAuditInputSchema } from './LeadCreateWithoutLeadComplianceAuditInputSchema';
import { LeadUncheckedCreateWithoutLeadComplianceAuditInputSchema } from './LeadUncheckedCreateWithoutLeadComplianceAuditInputSchema';
import { LeadCreateOrConnectWithoutLeadComplianceAuditInputSchema } from './LeadCreateOrConnectWithoutLeadComplianceAuditInputSchema';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';

export const LeadCreateNestedOneWithoutLeadComplianceAuditInputSchema: z.ZodType<Prisma.LeadCreateNestedOneWithoutLeadComplianceAuditInput> = z.object({
  create: z.union([ z.lazy(() => LeadCreateWithoutLeadComplianceAuditInputSchema),z.lazy(() => LeadUncheckedCreateWithoutLeadComplianceAuditInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutLeadComplianceAuditInputSchema).optional(),
  connect: z.lazy(() => LeadWhereUniqueInputSchema).optional()
}).strict();

export default LeadCreateNestedOneWithoutLeadComplianceAuditInputSchema;
