import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadComplianceHistoryCreateWithoutComplianceAuditInputSchema } from './LeadComplianceHistoryCreateWithoutComplianceAuditInputSchema';
import { LeadComplianceHistoryUncheckedCreateWithoutComplianceAuditInputSchema } from './LeadComplianceHistoryUncheckedCreateWithoutComplianceAuditInputSchema';
import { LeadComplianceHistoryCreateOrConnectWithoutComplianceAuditInputSchema } from './LeadComplianceHistoryCreateOrConnectWithoutComplianceAuditInputSchema';
import { LeadComplianceHistoryCreateManyComplianceAuditInputEnvelopeSchema } from './LeadComplianceHistoryCreateManyComplianceAuditInputEnvelopeSchema';
import { LeadComplianceHistoryWhereUniqueInputSchema } from './LeadComplianceHistoryWhereUniqueInputSchema';

export const LeadComplianceHistoryCreateNestedManyWithoutComplianceAuditInputSchema: z.ZodType<Prisma.LeadComplianceHistoryCreateNestedManyWithoutComplianceAuditInput> = z.object({
  create: z.union([ z.lazy(() => LeadComplianceHistoryCreateWithoutComplianceAuditInputSchema),z.lazy(() => LeadComplianceHistoryCreateWithoutComplianceAuditInputSchema).array(),z.lazy(() => LeadComplianceHistoryUncheckedCreateWithoutComplianceAuditInputSchema),z.lazy(() => LeadComplianceHistoryUncheckedCreateWithoutComplianceAuditInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LeadComplianceHistoryCreateOrConnectWithoutComplianceAuditInputSchema),z.lazy(() => LeadComplianceHistoryCreateOrConnectWithoutComplianceAuditInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LeadComplianceHistoryCreateManyComplianceAuditInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LeadComplianceHistoryWhereUniqueInputSchema),z.lazy(() => LeadComplianceHistoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default LeadComplianceHistoryCreateNestedManyWithoutComplianceAuditInputSchema;
