import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LogWhereUniqueInputSchema } from './LogWhereUniqueInputSchema';
import { LogCreateWithoutEndpointInputSchema } from './LogCreateWithoutEndpointInputSchema';
import { LogUncheckedCreateWithoutEndpointInputSchema } from './LogUncheckedCreateWithoutEndpointInputSchema';

export const LogCreateOrConnectWithoutEndpointInputSchema: z.ZodType<Prisma.LogCreateOrConnectWithoutEndpointInput> = z.object({
  where: z.lazy(() => LogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LogCreateWithoutEndpointInputSchema),z.lazy(() => LogUncheckedCreateWithoutEndpointInputSchema) ]),
}).strict();

export default LogCreateOrConnectWithoutEndpointInputSchema;
