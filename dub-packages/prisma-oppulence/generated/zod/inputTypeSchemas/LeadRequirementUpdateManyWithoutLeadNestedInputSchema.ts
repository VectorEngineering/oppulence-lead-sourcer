import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadRequirementCreateWithoutLeadInputSchema } from './LeadRequirementCreateWithoutLeadInputSchema';
import { LeadRequirementUncheckedCreateWithoutLeadInputSchema } from './LeadRequirementUncheckedCreateWithoutLeadInputSchema';
import { LeadRequirementCreateOrConnectWithoutLeadInputSchema } from './LeadRequirementCreateOrConnectWithoutLeadInputSchema';
import { LeadRequirementUpsertWithWhereUniqueWithoutLeadInputSchema } from './LeadRequirementUpsertWithWhereUniqueWithoutLeadInputSchema';
import { LeadRequirementCreateManyLeadInputEnvelopeSchema } from './LeadRequirementCreateManyLeadInputEnvelopeSchema';
import { LeadRequirementWhereUniqueInputSchema } from './LeadRequirementWhereUniqueInputSchema';
import { LeadRequirementUpdateWithWhereUniqueWithoutLeadInputSchema } from './LeadRequirementUpdateWithWhereUniqueWithoutLeadInputSchema';
import { LeadRequirementUpdateManyWithWhereWithoutLeadInputSchema } from './LeadRequirementUpdateManyWithWhereWithoutLeadInputSchema';
import { LeadRequirementScalarWhereInputSchema } from './LeadRequirementScalarWhereInputSchema';

export const LeadRequirementUpdateManyWithoutLeadNestedInputSchema: z.ZodType<Prisma.LeadRequirementUpdateManyWithoutLeadNestedInput> = z.object({
  create: z.union([ z.lazy(() => LeadRequirementCreateWithoutLeadInputSchema),z.lazy(() => LeadRequirementCreateWithoutLeadInputSchema).array(),z.lazy(() => LeadRequirementUncheckedCreateWithoutLeadInputSchema),z.lazy(() => LeadRequirementUncheckedCreateWithoutLeadInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LeadRequirementCreateOrConnectWithoutLeadInputSchema),z.lazy(() => LeadRequirementCreateOrConnectWithoutLeadInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LeadRequirementUpsertWithWhereUniqueWithoutLeadInputSchema),z.lazy(() => LeadRequirementUpsertWithWhereUniqueWithoutLeadInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LeadRequirementCreateManyLeadInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LeadRequirementWhereUniqueInputSchema),z.lazy(() => LeadRequirementWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LeadRequirementWhereUniqueInputSchema),z.lazy(() => LeadRequirementWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LeadRequirementWhereUniqueInputSchema),z.lazy(() => LeadRequirementWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LeadRequirementWhereUniqueInputSchema),z.lazy(() => LeadRequirementWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LeadRequirementUpdateWithWhereUniqueWithoutLeadInputSchema),z.lazy(() => LeadRequirementUpdateWithWhereUniqueWithoutLeadInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LeadRequirementUpdateManyWithWhereWithoutLeadInputSchema),z.lazy(() => LeadRequirementUpdateManyWithWhereWithoutLeadInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LeadRequirementScalarWhereInputSchema),z.lazy(() => LeadRequirementScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default LeadRequirementUpdateManyWithoutLeadNestedInputSchema;
