import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LogCreateWithoutEndpointInputSchema } from './LogCreateWithoutEndpointInputSchema';
import { LogUncheckedCreateWithoutEndpointInputSchema } from './LogUncheckedCreateWithoutEndpointInputSchema';
import { LogCreateOrConnectWithoutEndpointInputSchema } from './LogCreateOrConnectWithoutEndpointInputSchema';
import { LogUpsertWithWhereUniqueWithoutEndpointInputSchema } from './LogUpsertWithWhereUniqueWithoutEndpointInputSchema';
import { LogCreateManyEndpointInputEnvelopeSchema } from './LogCreateManyEndpointInputEnvelopeSchema';
import { LogWhereUniqueInputSchema } from './LogWhereUniqueInputSchema';
import { LogUpdateWithWhereUniqueWithoutEndpointInputSchema } from './LogUpdateWithWhereUniqueWithoutEndpointInputSchema';
import { LogUpdateManyWithWhereWithoutEndpointInputSchema } from './LogUpdateManyWithWhereWithoutEndpointInputSchema';
import { LogScalarWhereInputSchema } from './LogScalarWhereInputSchema';

export const LogUncheckedUpdateManyWithoutEndpointNestedInputSchema: z.ZodType<Prisma.LogUncheckedUpdateManyWithoutEndpointNestedInput> = z.object({
  create: z.union([ z.lazy(() => LogCreateWithoutEndpointInputSchema),z.lazy(() => LogCreateWithoutEndpointInputSchema).array(),z.lazy(() => LogUncheckedCreateWithoutEndpointInputSchema),z.lazy(() => LogUncheckedCreateWithoutEndpointInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LogCreateOrConnectWithoutEndpointInputSchema),z.lazy(() => LogCreateOrConnectWithoutEndpointInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LogUpsertWithWhereUniqueWithoutEndpointInputSchema),z.lazy(() => LogUpsertWithWhereUniqueWithoutEndpointInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LogCreateManyEndpointInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LogWhereUniqueInputSchema),z.lazy(() => LogWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LogWhereUniqueInputSchema),z.lazy(() => LogWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LogWhereUniqueInputSchema),z.lazy(() => LogWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LogWhereUniqueInputSchema),z.lazy(() => LogWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LogUpdateWithWhereUniqueWithoutEndpointInputSchema),z.lazy(() => LogUpdateWithWhereUniqueWithoutEndpointInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LogUpdateManyWithWhereWithoutEndpointInputSchema),z.lazy(() => LogUpdateManyWithWhereWithoutEndpointInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LogScalarWhereInputSchema),z.lazy(() => LogScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default LogUncheckedUpdateManyWithoutEndpointNestedInputSchema;
