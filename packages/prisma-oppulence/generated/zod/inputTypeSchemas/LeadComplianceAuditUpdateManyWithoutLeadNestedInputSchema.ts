import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadComplianceAuditCreateWithoutLeadInputSchema } from './LeadComplianceAuditCreateWithoutLeadInputSchema';
import { LeadComplianceAuditUncheckedCreateWithoutLeadInputSchema } from './LeadComplianceAuditUncheckedCreateWithoutLeadInputSchema';
import { LeadComplianceAuditCreateOrConnectWithoutLeadInputSchema } from './LeadComplianceAuditCreateOrConnectWithoutLeadInputSchema';
import { LeadComplianceAuditUpsertWithWhereUniqueWithoutLeadInputSchema } from './LeadComplianceAuditUpsertWithWhereUniqueWithoutLeadInputSchema';
import { LeadComplianceAuditCreateManyLeadInputEnvelopeSchema } from './LeadComplianceAuditCreateManyLeadInputEnvelopeSchema';
import { LeadComplianceAuditWhereUniqueInputSchema } from './LeadComplianceAuditWhereUniqueInputSchema';
import { LeadComplianceAuditUpdateWithWhereUniqueWithoutLeadInputSchema } from './LeadComplianceAuditUpdateWithWhereUniqueWithoutLeadInputSchema';
import { LeadComplianceAuditUpdateManyWithWhereWithoutLeadInputSchema } from './LeadComplianceAuditUpdateManyWithWhereWithoutLeadInputSchema';
import { LeadComplianceAuditScalarWhereInputSchema } from './LeadComplianceAuditScalarWhereInputSchema';

export const LeadComplianceAuditUpdateManyWithoutLeadNestedInputSchema: z.ZodType<Prisma.LeadComplianceAuditUpdateManyWithoutLeadNestedInput> = z.object({
  create: z.union([ z.lazy(() => LeadComplianceAuditCreateWithoutLeadInputSchema),z.lazy(() => LeadComplianceAuditCreateWithoutLeadInputSchema).array(),z.lazy(() => LeadComplianceAuditUncheckedCreateWithoutLeadInputSchema),z.lazy(() => LeadComplianceAuditUncheckedCreateWithoutLeadInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LeadComplianceAuditCreateOrConnectWithoutLeadInputSchema),z.lazy(() => LeadComplianceAuditCreateOrConnectWithoutLeadInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LeadComplianceAuditUpsertWithWhereUniqueWithoutLeadInputSchema),z.lazy(() => LeadComplianceAuditUpsertWithWhereUniqueWithoutLeadInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LeadComplianceAuditCreateManyLeadInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LeadComplianceAuditWhereUniqueInputSchema),z.lazy(() => LeadComplianceAuditWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LeadComplianceAuditWhereUniqueInputSchema),z.lazy(() => LeadComplianceAuditWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LeadComplianceAuditWhereUniqueInputSchema),z.lazy(() => LeadComplianceAuditWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LeadComplianceAuditWhereUniqueInputSchema),z.lazy(() => LeadComplianceAuditWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LeadComplianceAuditUpdateWithWhereUniqueWithoutLeadInputSchema),z.lazy(() => LeadComplianceAuditUpdateWithWhereUniqueWithoutLeadInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LeadComplianceAuditUpdateManyWithWhereWithoutLeadInputSchema),z.lazy(() => LeadComplianceAuditUpdateManyWithWhereWithoutLeadInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LeadComplianceAuditScalarWhereInputSchema),z.lazy(() => LeadComplianceAuditScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default LeadComplianceAuditUpdateManyWithoutLeadNestedInputSchema;
