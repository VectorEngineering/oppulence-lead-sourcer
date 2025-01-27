import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EndpointWhereInputSchema } from './EndpointWhereInputSchema';
import { EndpointUpdateWithoutLogsInputSchema } from './EndpointUpdateWithoutLogsInputSchema';
import { EndpointUncheckedUpdateWithoutLogsInputSchema } from './EndpointUncheckedUpdateWithoutLogsInputSchema';

export const EndpointUpdateToOneWithWhereWithoutLogsInputSchema: z.ZodType<Prisma.EndpointUpdateToOneWithWhereWithoutLogsInput> = z.object({
  where: z.lazy(() => EndpointWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => EndpointUpdateWithoutLogsInputSchema),z.lazy(() => EndpointUncheckedUpdateWithoutLogsInputSchema) ]),
}).strict();

export default EndpointUpdateToOneWithWhereWithoutLogsInputSchema;
