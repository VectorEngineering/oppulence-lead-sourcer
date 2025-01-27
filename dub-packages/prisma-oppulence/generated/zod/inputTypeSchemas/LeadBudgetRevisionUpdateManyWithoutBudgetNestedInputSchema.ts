import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadBudgetRevisionCreateWithoutBudgetInputSchema } from './LeadBudgetRevisionCreateWithoutBudgetInputSchema';
import { LeadBudgetRevisionUncheckedCreateWithoutBudgetInputSchema } from './LeadBudgetRevisionUncheckedCreateWithoutBudgetInputSchema';
import { LeadBudgetRevisionCreateOrConnectWithoutBudgetInputSchema } from './LeadBudgetRevisionCreateOrConnectWithoutBudgetInputSchema';
import { LeadBudgetRevisionUpsertWithWhereUniqueWithoutBudgetInputSchema } from './LeadBudgetRevisionUpsertWithWhereUniqueWithoutBudgetInputSchema';
import { LeadBudgetRevisionCreateManyBudgetInputEnvelopeSchema } from './LeadBudgetRevisionCreateManyBudgetInputEnvelopeSchema';
import { LeadBudgetRevisionWhereUniqueInputSchema } from './LeadBudgetRevisionWhereUniqueInputSchema';
import { LeadBudgetRevisionUpdateWithWhereUniqueWithoutBudgetInputSchema } from './LeadBudgetRevisionUpdateWithWhereUniqueWithoutBudgetInputSchema';
import { LeadBudgetRevisionUpdateManyWithWhereWithoutBudgetInputSchema } from './LeadBudgetRevisionUpdateManyWithWhereWithoutBudgetInputSchema';
import { LeadBudgetRevisionScalarWhereInputSchema } from './LeadBudgetRevisionScalarWhereInputSchema';

export const LeadBudgetRevisionUpdateManyWithoutBudgetNestedInputSchema: z.ZodType<Prisma.LeadBudgetRevisionUpdateManyWithoutBudgetNestedInput> = z.object({
  create: z.union([ z.lazy(() => LeadBudgetRevisionCreateWithoutBudgetInputSchema),z.lazy(() => LeadBudgetRevisionCreateWithoutBudgetInputSchema).array(),z.lazy(() => LeadBudgetRevisionUncheckedCreateWithoutBudgetInputSchema),z.lazy(() => LeadBudgetRevisionUncheckedCreateWithoutBudgetInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LeadBudgetRevisionCreateOrConnectWithoutBudgetInputSchema),z.lazy(() => LeadBudgetRevisionCreateOrConnectWithoutBudgetInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LeadBudgetRevisionUpsertWithWhereUniqueWithoutBudgetInputSchema),z.lazy(() => LeadBudgetRevisionUpsertWithWhereUniqueWithoutBudgetInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LeadBudgetRevisionCreateManyBudgetInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LeadBudgetRevisionWhereUniqueInputSchema),z.lazy(() => LeadBudgetRevisionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LeadBudgetRevisionWhereUniqueInputSchema),z.lazy(() => LeadBudgetRevisionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LeadBudgetRevisionWhereUniqueInputSchema),z.lazy(() => LeadBudgetRevisionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LeadBudgetRevisionWhereUniqueInputSchema),z.lazy(() => LeadBudgetRevisionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LeadBudgetRevisionUpdateWithWhereUniqueWithoutBudgetInputSchema),z.lazy(() => LeadBudgetRevisionUpdateWithWhereUniqueWithoutBudgetInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LeadBudgetRevisionUpdateManyWithWhereWithoutBudgetInputSchema),z.lazy(() => LeadBudgetRevisionUpdateManyWithWhereWithoutBudgetInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LeadBudgetRevisionScalarWhereInputSchema),z.lazy(() => LeadBudgetRevisionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default LeadBudgetRevisionUpdateManyWithoutBudgetNestedInputSchema;
