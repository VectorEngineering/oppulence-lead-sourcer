import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EndpointCreateWithoutLogsInputSchema } from './EndpointCreateWithoutLogsInputSchema';
import { EndpointUncheckedCreateWithoutLogsInputSchema } from './EndpointUncheckedCreateWithoutLogsInputSchema';
import { EndpointCreateOrConnectWithoutLogsInputSchema } from './EndpointCreateOrConnectWithoutLogsInputSchema';
import { EndpointWhereUniqueInputSchema } from './EndpointWhereUniqueInputSchema';

export const EndpointCreateNestedOneWithoutLogsInputSchema: z.ZodType<Prisma.EndpointCreateNestedOneWithoutLogsInput> = z.object({
  create: z.union([ z.lazy(() => EndpointCreateWithoutLogsInputSchema),z.lazy(() => EndpointUncheckedCreateWithoutLogsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EndpointCreateOrConnectWithoutLogsInputSchema).optional(),
  connect: z.lazy(() => EndpointWhereUniqueInputSchema).optional()
}).strict();

export default EndpointCreateNestedOneWithoutLogsInputSchema;
