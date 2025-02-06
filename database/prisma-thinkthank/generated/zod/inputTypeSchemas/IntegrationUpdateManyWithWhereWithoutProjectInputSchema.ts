import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntegrationScalarWhereInputSchema } from './IntegrationScalarWhereInputSchema';
import { IntegrationUpdateManyMutationInputSchema } from './IntegrationUpdateManyMutationInputSchema';
import { IntegrationUncheckedUpdateManyWithoutProjectInputSchema } from './IntegrationUncheckedUpdateManyWithoutProjectInputSchema';

export const IntegrationUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.IntegrationUpdateManyWithWhereWithoutProjectInput> = z.object({
  where: z.lazy(() => IntegrationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => IntegrationUpdateManyMutationInputSchema),z.lazy(() => IntegrationUncheckedUpdateManyWithoutProjectInputSchema) ]),
}).strict();

export default IntegrationUpdateManyWithWhereWithoutProjectInputSchema;
