import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadComplianceAuditCreateWithoutLeadInputSchema } from './LeadComplianceAuditCreateWithoutLeadInputSchema';
import { LeadComplianceAuditUncheckedCreateWithoutLeadInputSchema } from './LeadComplianceAuditUncheckedCreateWithoutLeadInputSchema';
import { LeadComplianceAuditCreateOrConnectWithoutLeadInputSchema } from './LeadComplianceAuditCreateOrConnectWithoutLeadInputSchema';
import { LeadComplianceAuditCreateManyLeadInputEnvelopeSchema } from './LeadComplianceAuditCreateManyLeadInputEnvelopeSchema';
import { LeadComplianceAuditWhereUniqueInputSchema } from './LeadComplianceAuditWhereUniqueInputSchema';

export const LeadComplianceAuditCreateNestedManyWithoutLeadInputSchema: z.ZodType<Prisma.LeadComplianceAuditCreateNestedManyWithoutLeadInput> = z.object({
  create: z.union([ z.lazy(() => LeadComplianceAuditCreateWithoutLeadInputSchema),z.lazy(() => LeadComplianceAuditCreateWithoutLeadInputSchema).array(),z.lazy(() => LeadComplianceAuditUncheckedCreateWithoutLeadInputSchema),z.lazy(() => LeadComplianceAuditUncheckedCreateWithoutLeadInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LeadComplianceAuditCreateOrConnectWithoutLeadInputSchema),z.lazy(() => LeadComplianceAuditCreateOrConnectWithoutLeadInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LeadComplianceAuditCreateManyLeadInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LeadComplianceAuditWhereUniqueInputSchema),z.lazy(() => LeadComplianceAuditWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default LeadComplianceAuditCreateNestedManyWithoutLeadInputSchema;
