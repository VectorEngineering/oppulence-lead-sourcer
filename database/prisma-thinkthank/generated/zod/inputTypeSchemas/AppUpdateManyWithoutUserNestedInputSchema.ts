import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppCreateWithoutUserInputSchema } from './AppCreateWithoutUserInputSchema';
import { AppUncheckedCreateWithoutUserInputSchema } from './AppUncheckedCreateWithoutUserInputSchema';
import { AppCreateOrConnectWithoutUserInputSchema } from './AppCreateOrConnectWithoutUserInputSchema';
import { AppUpsertWithWhereUniqueWithoutUserInputSchema } from './AppUpsertWithWhereUniqueWithoutUserInputSchema';
import { AppCreateManyUserInputEnvelopeSchema } from './AppCreateManyUserInputEnvelopeSchema';
import { AppWhereUniqueInputSchema } from './AppWhereUniqueInputSchema';
import { AppUpdateWithWhereUniqueWithoutUserInputSchema } from './AppUpdateWithWhereUniqueWithoutUserInputSchema';
import { AppUpdateManyWithWhereWithoutUserInputSchema } from './AppUpdateManyWithWhereWithoutUserInputSchema';
import { AppScalarWhereInputSchema } from './AppScalarWhereInputSchema';

export const AppUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AppUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AppCreateWithoutUserInputSchema),z.lazy(() => AppCreateWithoutUserInputSchema).array(),z.lazy(() => AppUncheckedCreateWithoutUserInputSchema),z.lazy(() => AppUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppCreateOrConnectWithoutUserInputSchema),z.lazy(() => AppCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AppUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AppUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AppWhereUniqueInputSchema),z.lazy(() => AppWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AppWhereUniqueInputSchema),z.lazy(() => AppWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AppWhereUniqueInputSchema),z.lazy(() => AppWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AppWhereUniqueInputSchema),z.lazy(() => AppWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AppUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AppUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AppUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => AppUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AppScalarWhereInputSchema),z.lazy(() => AppScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default AppUpdateManyWithoutUserNestedInputSchema;
