import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCreateWithoutLeadComplianceAuditInputSchema } from './LeadCreateWithoutLeadComplianceAuditInputSchema';
import { LeadUncheckedCreateWithoutLeadComplianceAuditInputSchema } from './LeadUncheckedCreateWithoutLeadComplianceAuditInputSchema';
import { LeadCreateOrConnectWithoutLeadComplianceAuditInputSchema } from './LeadCreateOrConnectWithoutLeadComplianceAuditInputSchema';
import { LeadUpsertWithoutLeadComplianceAuditInputSchema } from './LeadUpsertWithoutLeadComplianceAuditInputSchema';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadUpdateToOneWithWhereWithoutLeadComplianceAuditInputSchema } from './LeadUpdateToOneWithWhereWithoutLeadComplianceAuditInputSchema';
import { LeadUpdateWithoutLeadComplianceAuditInputSchema } from './LeadUpdateWithoutLeadComplianceAuditInputSchema';
import { LeadUncheckedUpdateWithoutLeadComplianceAuditInputSchema } from './LeadUncheckedUpdateWithoutLeadComplianceAuditInputSchema';

export const LeadUpdateOneRequiredWithoutLeadComplianceAuditNestedInputSchema: z.ZodType<Prisma.LeadUpdateOneRequiredWithoutLeadComplianceAuditNestedInput> = z.object({
  create: z.union([ z.lazy(() => LeadCreateWithoutLeadComplianceAuditInputSchema),z.lazy(() => LeadUncheckedCreateWithoutLeadComplianceAuditInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutLeadComplianceAuditInputSchema).optional(),
  upsert: z.lazy(() => LeadUpsertWithoutLeadComplianceAuditInputSchema).optional(),
  connect: z.lazy(() => LeadWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LeadUpdateToOneWithWhereWithoutLeadComplianceAuditInputSchema),z.lazy(() => LeadUpdateWithoutLeadComplianceAuditInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutLeadComplianceAuditInputSchema) ]).optional(),
}).strict();

export default LeadUpdateOneRequiredWithoutLeadComplianceAuditNestedInputSchema;
