import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntegrationWhereUniqueInputSchema } from './IntegrationWhereUniqueInputSchema';
import { IntegrationUpdateWithoutProjectInputSchema } from './IntegrationUpdateWithoutProjectInputSchema';
import { IntegrationUncheckedUpdateWithoutProjectInputSchema } from './IntegrationUncheckedUpdateWithoutProjectInputSchema';

export const IntegrationUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.IntegrationUpdateWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => IntegrationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => IntegrationUpdateWithoutProjectInputSchema),z.lazy(() => IntegrationUncheckedUpdateWithoutProjectInputSchema) ]),
}).strict();

export default IntegrationUpdateWithWhereUniqueWithoutProjectInputSchema;
