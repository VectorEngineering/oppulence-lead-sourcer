import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadContactPreferenceCreateWithoutLeadInputSchema } from './LeadContactPreferenceCreateWithoutLeadInputSchema';
import { LeadContactPreferenceUncheckedCreateWithoutLeadInputSchema } from './LeadContactPreferenceUncheckedCreateWithoutLeadInputSchema';
import { LeadContactPreferenceCreateOrConnectWithoutLeadInputSchema } from './LeadContactPreferenceCreateOrConnectWithoutLeadInputSchema';
import { LeadContactPreferenceUpsertWithWhereUniqueWithoutLeadInputSchema } from './LeadContactPreferenceUpsertWithWhereUniqueWithoutLeadInputSchema';
import { LeadContactPreferenceCreateManyLeadInputEnvelopeSchema } from './LeadContactPreferenceCreateManyLeadInputEnvelopeSchema';
import { LeadContactPreferenceWhereUniqueInputSchema } from './LeadContactPreferenceWhereUniqueInputSchema';
import { LeadContactPreferenceUpdateWithWhereUniqueWithoutLeadInputSchema } from './LeadContactPreferenceUpdateWithWhereUniqueWithoutLeadInputSchema';
import { LeadContactPreferenceUpdateManyWithWhereWithoutLeadInputSchema } from './LeadContactPreferenceUpdateManyWithWhereWithoutLeadInputSchema';
import { LeadContactPreferenceScalarWhereInputSchema } from './LeadContactPreferenceScalarWhereInputSchema';

export const LeadContactPreferenceUpdateManyWithoutLeadNestedInputSchema: z.ZodType<Prisma.LeadContactPreferenceUpdateManyWithoutLeadNestedInput> = z.object({
  create: z.union([ z.lazy(() => LeadContactPreferenceCreateWithoutLeadInputSchema),z.lazy(() => LeadContactPreferenceCreateWithoutLeadInputSchema).array(),z.lazy(() => LeadContactPreferenceUncheckedCreateWithoutLeadInputSchema),z.lazy(() => LeadContactPreferenceUncheckedCreateWithoutLeadInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LeadContactPreferenceCreateOrConnectWithoutLeadInputSchema),z.lazy(() => LeadContactPreferenceCreateOrConnectWithoutLeadInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LeadContactPreferenceUpsertWithWhereUniqueWithoutLeadInputSchema),z.lazy(() => LeadContactPreferenceUpsertWithWhereUniqueWithoutLeadInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LeadContactPreferenceCreateManyLeadInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LeadContactPreferenceWhereUniqueInputSchema),z.lazy(() => LeadContactPreferenceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LeadContactPreferenceWhereUniqueInputSchema),z.lazy(() => LeadContactPreferenceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LeadContactPreferenceWhereUniqueInputSchema),z.lazy(() => LeadContactPreferenceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LeadContactPreferenceWhereUniqueInputSchema),z.lazy(() => LeadContactPreferenceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LeadContactPreferenceUpdateWithWhereUniqueWithoutLeadInputSchema),z.lazy(() => LeadContactPreferenceUpdateWithWhereUniqueWithoutLeadInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LeadContactPreferenceUpdateManyWithWhereWithoutLeadInputSchema),z.lazy(() => LeadContactPreferenceUpdateManyWithWhereWithoutLeadInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LeadContactPreferenceScalarWhereInputSchema),z.lazy(() => LeadContactPreferenceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default LeadContactPreferenceUpdateManyWithoutLeadNestedInputSchema;
