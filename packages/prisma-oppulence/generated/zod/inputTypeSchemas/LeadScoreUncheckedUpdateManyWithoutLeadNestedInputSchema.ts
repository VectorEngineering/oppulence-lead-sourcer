import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadScoreCreateWithoutLeadInputSchema } from './LeadScoreCreateWithoutLeadInputSchema';
import { LeadScoreUncheckedCreateWithoutLeadInputSchema } from './LeadScoreUncheckedCreateWithoutLeadInputSchema';
import { LeadScoreCreateOrConnectWithoutLeadInputSchema } from './LeadScoreCreateOrConnectWithoutLeadInputSchema';
import { LeadScoreUpsertWithWhereUniqueWithoutLeadInputSchema } from './LeadScoreUpsertWithWhereUniqueWithoutLeadInputSchema';
import { LeadScoreCreateManyLeadInputEnvelopeSchema } from './LeadScoreCreateManyLeadInputEnvelopeSchema';
import { LeadScoreWhereUniqueInputSchema } from './LeadScoreWhereUniqueInputSchema';
import { LeadScoreUpdateWithWhereUniqueWithoutLeadInputSchema } from './LeadScoreUpdateWithWhereUniqueWithoutLeadInputSchema';
import { LeadScoreUpdateManyWithWhereWithoutLeadInputSchema } from './LeadScoreUpdateManyWithWhereWithoutLeadInputSchema';
import { LeadScoreScalarWhereInputSchema } from './LeadScoreScalarWhereInputSchema';

export const LeadScoreUncheckedUpdateManyWithoutLeadNestedInputSchema: z.ZodType<Prisma.LeadScoreUncheckedUpdateManyWithoutLeadNestedInput> = z.object({
  create: z.union([ z.lazy(() => LeadScoreCreateWithoutLeadInputSchema),z.lazy(() => LeadScoreCreateWithoutLeadInputSchema).array(),z.lazy(() => LeadScoreUncheckedCreateWithoutLeadInputSchema),z.lazy(() => LeadScoreUncheckedCreateWithoutLeadInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LeadScoreCreateOrConnectWithoutLeadInputSchema),z.lazy(() => LeadScoreCreateOrConnectWithoutLeadInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LeadScoreUpsertWithWhereUniqueWithoutLeadInputSchema),z.lazy(() => LeadScoreUpsertWithWhereUniqueWithoutLeadInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LeadScoreCreateManyLeadInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LeadScoreWhereUniqueInputSchema),z.lazy(() => LeadScoreWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LeadScoreWhereUniqueInputSchema),z.lazy(() => LeadScoreWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LeadScoreWhereUniqueInputSchema),z.lazy(() => LeadScoreWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LeadScoreWhereUniqueInputSchema),z.lazy(() => LeadScoreWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LeadScoreUpdateWithWhereUniqueWithoutLeadInputSchema),z.lazy(() => LeadScoreUpdateWithWhereUniqueWithoutLeadInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LeadScoreUpdateManyWithWhereWithoutLeadInputSchema),z.lazy(() => LeadScoreUpdateManyWithWhereWithoutLeadInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LeadScoreScalarWhereInputSchema),z.lazy(() => LeadScoreScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default LeadScoreUncheckedUpdateManyWithoutLeadNestedInputSchema;
