import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntegrationScalarWhereInputSchema } from './IntegrationScalarWhereInputSchema';
import { IntegrationUpdateManyMutationInputSchema } from './IntegrationUpdateManyMutationInputSchema';
import { IntegrationUncheckedUpdateManyWithoutUserInputSchema } from './IntegrationUncheckedUpdateManyWithoutUserInputSchema';

export const IntegrationUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.IntegrationUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => IntegrationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => IntegrationUpdateManyMutationInputSchema),z.lazy(() => IntegrationUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default IntegrationUpdateManyWithWhereWithoutUserInputSchema;
