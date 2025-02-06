import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DashboardCreateWithoutUserInputSchema } from './DashboardCreateWithoutUserInputSchema';
import { DashboardUncheckedCreateWithoutUserInputSchema } from './DashboardUncheckedCreateWithoutUserInputSchema';
import { DashboardCreateOrConnectWithoutUserInputSchema } from './DashboardCreateOrConnectWithoutUserInputSchema';
import { DashboardUpsertWithWhereUniqueWithoutUserInputSchema } from './DashboardUpsertWithWhereUniqueWithoutUserInputSchema';
import { DashboardCreateManyUserInputEnvelopeSchema } from './DashboardCreateManyUserInputEnvelopeSchema';
import { DashboardWhereUniqueInputSchema } from './DashboardWhereUniqueInputSchema';
import { DashboardUpdateWithWhereUniqueWithoutUserInputSchema } from './DashboardUpdateWithWhereUniqueWithoutUserInputSchema';
import { DashboardUpdateManyWithWhereWithoutUserInputSchema } from './DashboardUpdateManyWithWhereWithoutUserInputSchema';
import { DashboardScalarWhereInputSchema } from './DashboardScalarWhereInputSchema';

export const DashboardUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.DashboardUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => DashboardCreateWithoutUserInputSchema),z.lazy(() => DashboardCreateWithoutUserInputSchema).array(),z.lazy(() => DashboardUncheckedCreateWithoutUserInputSchema),z.lazy(() => DashboardUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DashboardCreateOrConnectWithoutUserInputSchema),z.lazy(() => DashboardCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DashboardUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => DashboardUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DashboardCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => DashboardWhereUniqueInputSchema),z.lazy(() => DashboardWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DashboardWhereUniqueInputSchema),z.lazy(() => DashboardWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DashboardWhereUniqueInputSchema),z.lazy(() => DashboardWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DashboardWhereUniqueInputSchema),z.lazy(() => DashboardWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DashboardUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => DashboardUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DashboardUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => DashboardUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DashboardScalarWhereInputSchema),z.lazy(() => DashboardScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default DashboardUpdateManyWithoutUserNestedInputSchema;
