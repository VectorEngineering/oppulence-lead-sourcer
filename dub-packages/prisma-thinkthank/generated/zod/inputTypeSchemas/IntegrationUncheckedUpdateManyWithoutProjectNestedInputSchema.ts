import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntegrationCreateWithoutProjectInputSchema } from './IntegrationCreateWithoutProjectInputSchema';
import { IntegrationUncheckedCreateWithoutProjectInputSchema } from './IntegrationUncheckedCreateWithoutProjectInputSchema';
import { IntegrationCreateOrConnectWithoutProjectInputSchema } from './IntegrationCreateOrConnectWithoutProjectInputSchema';
import { IntegrationUpsertWithWhereUniqueWithoutProjectInputSchema } from './IntegrationUpsertWithWhereUniqueWithoutProjectInputSchema';
import { IntegrationCreateManyProjectInputEnvelopeSchema } from './IntegrationCreateManyProjectInputEnvelopeSchema';
import { IntegrationWhereUniqueInputSchema } from './IntegrationWhereUniqueInputSchema';
import { IntegrationUpdateWithWhereUniqueWithoutProjectInputSchema } from './IntegrationUpdateWithWhereUniqueWithoutProjectInputSchema';
import { IntegrationUpdateManyWithWhereWithoutProjectInputSchema } from './IntegrationUpdateManyWithWhereWithoutProjectInputSchema';
import { IntegrationScalarWhereInputSchema } from './IntegrationScalarWhereInputSchema';

export const IntegrationUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.IntegrationUncheckedUpdateManyWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => IntegrationCreateWithoutProjectInputSchema),z.lazy(() => IntegrationCreateWithoutProjectInputSchema).array(),z.lazy(() => IntegrationUncheckedCreateWithoutProjectInputSchema),z.lazy(() => IntegrationUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IntegrationCreateOrConnectWithoutProjectInputSchema),z.lazy(() => IntegrationCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => IntegrationUpsertWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => IntegrationUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IntegrationCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => IntegrationWhereUniqueInputSchema),z.lazy(() => IntegrationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => IntegrationWhereUniqueInputSchema),z.lazy(() => IntegrationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => IntegrationWhereUniqueInputSchema),z.lazy(() => IntegrationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => IntegrationWhereUniqueInputSchema),z.lazy(() => IntegrationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => IntegrationUpdateWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => IntegrationUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => IntegrationUpdateManyWithWhereWithoutProjectInputSchema),z.lazy(() => IntegrationUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => IntegrationScalarWhereInputSchema),z.lazy(() => IntegrationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default IntegrationUncheckedUpdateManyWithoutProjectNestedInputSchema;
