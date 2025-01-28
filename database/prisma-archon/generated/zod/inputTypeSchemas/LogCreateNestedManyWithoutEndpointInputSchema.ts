import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LogCreateWithoutEndpointInputSchema } from './LogCreateWithoutEndpointInputSchema';
import { LogUncheckedCreateWithoutEndpointInputSchema } from './LogUncheckedCreateWithoutEndpointInputSchema';
import { LogCreateOrConnectWithoutEndpointInputSchema } from './LogCreateOrConnectWithoutEndpointInputSchema';
import { LogCreateManyEndpointInputEnvelopeSchema } from './LogCreateManyEndpointInputEnvelopeSchema';
import { LogWhereUniqueInputSchema } from './LogWhereUniqueInputSchema';

export const LogCreateNestedManyWithoutEndpointInputSchema: z.ZodType<Prisma.LogCreateNestedManyWithoutEndpointInput> = z.object({
  create: z.union([ z.lazy(() => LogCreateWithoutEndpointInputSchema),z.lazy(() => LogCreateWithoutEndpointInputSchema).array(),z.lazy(() => LogUncheckedCreateWithoutEndpointInputSchema),z.lazy(() => LogUncheckedCreateWithoutEndpointInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LogCreateOrConnectWithoutEndpointInputSchema),z.lazy(() => LogCreateOrConnectWithoutEndpointInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LogCreateManyEndpointInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LogWhereUniqueInputSchema),z.lazy(() => LogWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default LogCreateNestedManyWithoutEndpointInputSchema;
