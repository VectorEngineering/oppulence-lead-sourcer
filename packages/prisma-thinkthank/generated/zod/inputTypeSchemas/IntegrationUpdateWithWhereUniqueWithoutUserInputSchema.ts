import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntegrationWhereUniqueInputSchema } from './IntegrationWhereUniqueInputSchema';
import { IntegrationUpdateWithoutUserInputSchema } from './IntegrationUpdateWithoutUserInputSchema';
import { IntegrationUncheckedUpdateWithoutUserInputSchema } from './IntegrationUncheckedUpdateWithoutUserInputSchema';

export const IntegrationUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.IntegrationUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => IntegrationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => IntegrationUpdateWithoutUserInputSchema),z.lazy(() => IntegrationUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default IntegrationUpdateWithWhereUniqueWithoutUserInputSchema;
