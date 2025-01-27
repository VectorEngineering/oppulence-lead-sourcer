import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EndpointUpdateWithoutLogsInputSchema } from './EndpointUpdateWithoutLogsInputSchema';
import { EndpointUncheckedUpdateWithoutLogsInputSchema } from './EndpointUncheckedUpdateWithoutLogsInputSchema';
import { EndpointCreateWithoutLogsInputSchema } from './EndpointCreateWithoutLogsInputSchema';
import { EndpointUncheckedCreateWithoutLogsInputSchema } from './EndpointUncheckedCreateWithoutLogsInputSchema';
import { EndpointWhereInputSchema } from './EndpointWhereInputSchema';

export const EndpointUpsertWithoutLogsInputSchema: z.ZodType<Prisma.EndpointUpsertWithoutLogsInput> = z.object({
  update: z.union([ z.lazy(() => EndpointUpdateWithoutLogsInputSchema),z.lazy(() => EndpointUncheckedUpdateWithoutLogsInputSchema) ]),
  create: z.union([ z.lazy(() => EndpointCreateWithoutLogsInputSchema),z.lazy(() => EndpointUncheckedCreateWithoutLogsInputSchema) ]),
  where: z.lazy(() => EndpointWhereInputSchema).optional()
}).strict();

export default EndpointUpsertWithoutLogsInputSchema;
