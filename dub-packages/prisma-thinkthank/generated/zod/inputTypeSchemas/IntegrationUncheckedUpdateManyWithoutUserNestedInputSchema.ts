import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntegrationCreateWithoutUserInputSchema } from './IntegrationCreateWithoutUserInputSchema';
import { IntegrationUncheckedCreateWithoutUserInputSchema } from './IntegrationUncheckedCreateWithoutUserInputSchema';
import { IntegrationCreateOrConnectWithoutUserInputSchema } from './IntegrationCreateOrConnectWithoutUserInputSchema';
import { IntegrationUpsertWithWhereUniqueWithoutUserInputSchema } from './IntegrationUpsertWithWhereUniqueWithoutUserInputSchema';
import { IntegrationCreateManyUserInputEnvelopeSchema } from './IntegrationCreateManyUserInputEnvelopeSchema';
import { IntegrationWhereUniqueInputSchema } from './IntegrationWhereUniqueInputSchema';
import { IntegrationUpdateWithWhereUniqueWithoutUserInputSchema } from './IntegrationUpdateWithWhereUniqueWithoutUserInputSchema';
import { IntegrationUpdateManyWithWhereWithoutUserInputSchema } from './IntegrationUpdateManyWithWhereWithoutUserInputSchema';
import { IntegrationScalarWhereInputSchema } from './IntegrationScalarWhereInputSchema';

export const IntegrationUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.IntegrationUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => IntegrationCreateWithoutUserInputSchema),z.lazy(() => IntegrationCreateWithoutUserInputSchema).array(),z.lazy(() => IntegrationUncheckedCreateWithoutUserInputSchema),z.lazy(() => IntegrationUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IntegrationCreateOrConnectWithoutUserInputSchema),z.lazy(() => IntegrationCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => IntegrationUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => IntegrationUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IntegrationCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => IntegrationWhereUniqueInputSchema),z.lazy(() => IntegrationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => IntegrationWhereUniqueInputSchema),z.lazy(() => IntegrationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => IntegrationWhereUniqueInputSchema),z.lazy(() => IntegrationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => IntegrationWhereUniqueInputSchema),z.lazy(() => IntegrationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => IntegrationUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => IntegrationUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => IntegrationUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => IntegrationUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => IntegrationScalarWhereInputSchema),z.lazy(() => IntegrationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default IntegrationUncheckedUpdateManyWithoutUserNestedInputSchema;
