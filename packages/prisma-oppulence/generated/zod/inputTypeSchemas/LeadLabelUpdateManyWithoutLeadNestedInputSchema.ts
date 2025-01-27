import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadLabelCreateWithoutLeadInputSchema } from './LeadLabelCreateWithoutLeadInputSchema';
import { LeadLabelUncheckedCreateWithoutLeadInputSchema } from './LeadLabelUncheckedCreateWithoutLeadInputSchema';
import { LeadLabelCreateOrConnectWithoutLeadInputSchema } from './LeadLabelCreateOrConnectWithoutLeadInputSchema';
import { LeadLabelUpsertWithWhereUniqueWithoutLeadInputSchema } from './LeadLabelUpsertWithWhereUniqueWithoutLeadInputSchema';
import { LeadLabelCreateManyLeadInputEnvelopeSchema } from './LeadLabelCreateManyLeadInputEnvelopeSchema';
import { LeadLabelWhereUniqueInputSchema } from './LeadLabelWhereUniqueInputSchema';
import { LeadLabelUpdateWithWhereUniqueWithoutLeadInputSchema } from './LeadLabelUpdateWithWhereUniqueWithoutLeadInputSchema';
import { LeadLabelUpdateManyWithWhereWithoutLeadInputSchema } from './LeadLabelUpdateManyWithWhereWithoutLeadInputSchema';
import { LeadLabelScalarWhereInputSchema } from './LeadLabelScalarWhereInputSchema';

export const LeadLabelUpdateManyWithoutLeadNestedInputSchema: z.ZodType<Prisma.LeadLabelUpdateManyWithoutLeadNestedInput> = z.object({
  create: z.union([ z.lazy(() => LeadLabelCreateWithoutLeadInputSchema),z.lazy(() => LeadLabelCreateWithoutLeadInputSchema).array(),z.lazy(() => LeadLabelUncheckedCreateWithoutLeadInputSchema),z.lazy(() => LeadLabelUncheckedCreateWithoutLeadInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LeadLabelCreateOrConnectWithoutLeadInputSchema),z.lazy(() => LeadLabelCreateOrConnectWithoutLeadInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LeadLabelUpsertWithWhereUniqueWithoutLeadInputSchema),z.lazy(() => LeadLabelUpsertWithWhereUniqueWithoutLeadInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LeadLabelCreateManyLeadInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LeadLabelWhereUniqueInputSchema),z.lazy(() => LeadLabelWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LeadLabelWhereUniqueInputSchema),z.lazy(() => LeadLabelWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LeadLabelWhereUniqueInputSchema),z.lazy(() => LeadLabelWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LeadLabelWhereUniqueInputSchema),z.lazy(() => LeadLabelWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LeadLabelUpdateWithWhereUniqueWithoutLeadInputSchema),z.lazy(() => LeadLabelUpdateWithWhereUniqueWithoutLeadInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LeadLabelUpdateManyWithWhereWithoutLeadInputSchema),z.lazy(() => LeadLabelUpdateManyWithWhereWithoutLeadInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LeadLabelScalarWhereInputSchema),z.lazy(() => LeadLabelScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default LeadLabelUpdateManyWithoutLeadNestedInputSchema;
