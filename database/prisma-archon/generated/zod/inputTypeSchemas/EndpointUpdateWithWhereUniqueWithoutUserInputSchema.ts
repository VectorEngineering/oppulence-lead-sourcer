import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EndpointWhereUniqueInputSchema } from './EndpointWhereUniqueInputSchema';
import { EndpointUpdateWithoutUserInputSchema } from './EndpointUpdateWithoutUserInputSchema';
import { EndpointUncheckedUpdateWithoutUserInputSchema } from './EndpointUncheckedUpdateWithoutUserInputSchema';

export const EndpointUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.EndpointUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => EndpointWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EndpointUpdateWithoutUserInputSchema),z.lazy(() => EndpointUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default EndpointUpdateWithWhereUniqueWithoutUserInputSchema;
