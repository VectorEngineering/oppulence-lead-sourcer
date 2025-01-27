import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EndpointWhereUniqueInputSchema } from './EndpointWhereUniqueInputSchema';
import { EndpointCreateWithoutLogsInputSchema } from './EndpointCreateWithoutLogsInputSchema';
import { EndpointUncheckedCreateWithoutLogsInputSchema } from './EndpointUncheckedCreateWithoutLogsInputSchema';

export const EndpointCreateOrConnectWithoutLogsInputSchema: z.ZodType<Prisma.EndpointCreateOrConnectWithoutLogsInput> = z.object({
  where: z.lazy(() => EndpointWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EndpointCreateWithoutLogsInputSchema),z.lazy(() => EndpointUncheckedCreateWithoutLogsInputSchema) ]),
}).strict();

export default EndpointCreateOrConnectWithoutLogsInputSchema;
