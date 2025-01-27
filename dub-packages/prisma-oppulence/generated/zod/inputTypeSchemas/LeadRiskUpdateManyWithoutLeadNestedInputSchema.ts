import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadRiskCreateWithoutLeadInputSchema } from './LeadRiskCreateWithoutLeadInputSchema';
import { LeadRiskUncheckedCreateWithoutLeadInputSchema } from './LeadRiskUncheckedCreateWithoutLeadInputSchema';
import { LeadRiskCreateOrConnectWithoutLeadInputSchema } from './LeadRiskCreateOrConnectWithoutLeadInputSchema';
import { LeadRiskUpsertWithWhereUniqueWithoutLeadInputSchema } from './LeadRiskUpsertWithWhereUniqueWithoutLeadInputSchema';
import { LeadRiskCreateManyLeadInputEnvelopeSchema } from './LeadRiskCreateManyLeadInputEnvelopeSchema';
import { LeadRiskWhereUniqueInputSchema } from './LeadRiskWhereUniqueInputSchema';
import { LeadRiskUpdateWithWhereUniqueWithoutLeadInputSchema } from './LeadRiskUpdateWithWhereUniqueWithoutLeadInputSchema';
import { LeadRiskUpdateManyWithWhereWithoutLeadInputSchema } from './LeadRiskUpdateManyWithWhereWithoutLeadInputSchema';
import { LeadRiskScalarWhereInputSchema } from './LeadRiskScalarWhereInputSchema';

export const LeadRiskUpdateManyWithoutLeadNestedInputSchema: z.ZodType<Prisma.LeadRiskUpdateManyWithoutLeadNestedInput> = z.object({
  create: z.union([ z.lazy(() => LeadRiskCreateWithoutLeadInputSchema),z.lazy(() => LeadRiskCreateWithoutLeadInputSchema).array(),z.lazy(() => LeadRiskUncheckedCreateWithoutLeadInputSchema),z.lazy(() => LeadRiskUncheckedCreateWithoutLeadInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LeadRiskCreateOrConnectWithoutLeadInputSchema),z.lazy(() => LeadRiskCreateOrConnectWithoutLeadInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LeadRiskUpsertWithWhereUniqueWithoutLeadInputSchema),z.lazy(() => LeadRiskUpsertWithWhereUniqueWithoutLeadInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LeadRiskCreateManyLeadInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LeadRiskWhereUniqueInputSchema),z.lazy(() => LeadRiskWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LeadRiskWhereUniqueInputSchema),z.lazy(() => LeadRiskWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LeadRiskWhereUniqueInputSchema),z.lazy(() => LeadRiskWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LeadRiskWhereUniqueInputSchema),z.lazy(() => LeadRiskWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LeadRiskUpdateWithWhereUniqueWithoutLeadInputSchema),z.lazy(() => LeadRiskUpdateWithWhereUniqueWithoutLeadInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LeadRiskUpdateManyWithWhereWithoutLeadInputSchema),z.lazy(() => LeadRiskUpdateManyWithWhereWithoutLeadInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LeadRiskScalarWhereInputSchema),z.lazy(() => LeadRiskScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default LeadRiskUpdateManyWithoutLeadNestedInputSchema;
