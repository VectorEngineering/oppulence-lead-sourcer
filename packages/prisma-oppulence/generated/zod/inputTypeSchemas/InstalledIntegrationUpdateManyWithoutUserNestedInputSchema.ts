import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InstalledIntegrationCreateWithoutUserInputSchema } from './InstalledIntegrationCreateWithoutUserInputSchema';
import { InstalledIntegrationUncheckedCreateWithoutUserInputSchema } from './InstalledIntegrationUncheckedCreateWithoutUserInputSchema';
import { InstalledIntegrationCreateOrConnectWithoutUserInputSchema } from './InstalledIntegrationCreateOrConnectWithoutUserInputSchema';
import { InstalledIntegrationUpsertWithWhereUniqueWithoutUserInputSchema } from './InstalledIntegrationUpsertWithWhereUniqueWithoutUserInputSchema';
import { InstalledIntegrationCreateManyUserInputEnvelopeSchema } from './InstalledIntegrationCreateManyUserInputEnvelopeSchema';
import { InstalledIntegrationWhereUniqueInputSchema } from './InstalledIntegrationWhereUniqueInputSchema';
import { InstalledIntegrationUpdateWithWhereUniqueWithoutUserInputSchema } from './InstalledIntegrationUpdateWithWhereUniqueWithoutUserInputSchema';
import { InstalledIntegrationUpdateManyWithWhereWithoutUserInputSchema } from './InstalledIntegrationUpdateManyWithWhereWithoutUserInputSchema';
import { InstalledIntegrationScalarWhereInputSchema } from './InstalledIntegrationScalarWhereInputSchema';

export const InstalledIntegrationUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.InstalledIntegrationUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => InstalledIntegrationCreateWithoutUserInputSchema),z.lazy(() => InstalledIntegrationCreateWithoutUserInputSchema).array(),z.lazy(() => InstalledIntegrationUncheckedCreateWithoutUserInputSchema),z.lazy(() => InstalledIntegrationUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InstalledIntegrationCreateOrConnectWithoutUserInputSchema),z.lazy(() => InstalledIntegrationCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InstalledIntegrationUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => InstalledIntegrationUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InstalledIntegrationCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InstalledIntegrationWhereUniqueInputSchema),z.lazy(() => InstalledIntegrationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InstalledIntegrationWhereUniqueInputSchema),z.lazy(() => InstalledIntegrationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InstalledIntegrationWhereUniqueInputSchema),z.lazy(() => InstalledIntegrationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InstalledIntegrationWhereUniqueInputSchema),z.lazy(() => InstalledIntegrationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InstalledIntegrationUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => InstalledIntegrationUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InstalledIntegrationUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => InstalledIntegrationUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InstalledIntegrationScalarWhereInputSchema),z.lazy(() => InstalledIntegrationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default InstalledIntegrationUpdateManyWithoutUserNestedInputSchema;
