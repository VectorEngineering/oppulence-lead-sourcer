import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadProductFitCreateWithoutLeadInputSchema } from './LeadProductFitCreateWithoutLeadInputSchema';
import { LeadProductFitUncheckedCreateWithoutLeadInputSchema } from './LeadProductFitUncheckedCreateWithoutLeadInputSchema';
import { LeadProductFitCreateOrConnectWithoutLeadInputSchema } from './LeadProductFitCreateOrConnectWithoutLeadInputSchema';
import { LeadProductFitUpsertWithWhereUniqueWithoutLeadInputSchema } from './LeadProductFitUpsertWithWhereUniqueWithoutLeadInputSchema';
import { LeadProductFitCreateManyLeadInputEnvelopeSchema } from './LeadProductFitCreateManyLeadInputEnvelopeSchema';
import { LeadProductFitWhereUniqueInputSchema } from './LeadProductFitWhereUniqueInputSchema';
import { LeadProductFitUpdateWithWhereUniqueWithoutLeadInputSchema } from './LeadProductFitUpdateWithWhereUniqueWithoutLeadInputSchema';
import { LeadProductFitUpdateManyWithWhereWithoutLeadInputSchema } from './LeadProductFitUpdateManyWithWhereWithoutLeadInputSchema';
import { LeadProductFitScalarWhereInputSchema } from './LeadProductFitScalarWhereInputSchema';

export const LeadProductFitUpdateManyWithoutLeadNestedInputSchema: z.ZodType<Prisma.LeadProductFitUpdateManyWithoutLeadNestedInput> = z.object({
  create: z.union([ z.lazy(() => LeadProductFitCreateWithoutLeadInputSchema),z.lazy(() => LeadProductFitCreateWithoutLeadInputSchema).array(),z.lazy(() => LeadProductFitUncheckedCreateWithoutLeadInputSchema),z.lazy(() => LeadProductFitUncheckedCreateWithoutLeadInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LeadProductFitCreateOrConnectWithoutLeadInputSchema),z.lazy(() => LeadProductFitCreateOrConnectWithoutLeadInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LeadProductFitUpsertWithWhereUniqueWithoutLeadInputSchema),z.lazy(() => LeadProductFitUpsertWithWhereUniqueWithoutLeadInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LeadProductFitCreateManyLeadInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LeadProductFitWhereUniqueInputSchema),z.lazy(() => LeadProductFitWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LeadProductFitWhereUniqueInputSchema),z.lazy(() => LeadProductFitWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LeadProductFitWhereUniqueInputSchema),z.lazy(() => LeadProductFitWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LeadProductFitWhereUniqueInputSchema),z.lazy(() => LeadProductFitWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LeadProductFitUpdateWithWhereUniqueWithoutLeadInputSchema),z.lazy(() => LeadProductFitUpdateWithWhereUniqueWithoutLeadInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LeadProductFitUpdateManyWithWhereWithoutLeadInputSchema),z.lazy(() => LeadProductFitUpdateManyWithWhereWithoutLeadInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LeadProductFitScalarWhereInputSchema),z.lazy(() => LeadProductFitScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default LeadProductFitUpdateManyWithoutLeadNestedInputSchema;
