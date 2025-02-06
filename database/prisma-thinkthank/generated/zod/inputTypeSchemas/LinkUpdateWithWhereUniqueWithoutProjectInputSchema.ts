import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkWhereUniqueInputSchema } from './LinkWhereUniqueInputSchema';
import { LinkUpdateWithoutProjectInputSchema } from './LinkUpdateWithoutProjectInputSchema';
import { LinkUncheckedUpdateWithoutProjectInputSchema } from './LinkUncheckedUpdateWithoutProjectInputSchema';

export const LinkUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.LinkUpdateWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => LinkWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LinkUpdateWithoutProjectInputSchema),z.lazy(() => LinkUncheckedUpdateWithoutProjectInputSchema) ]),
}).strict();

export default LinkUpdateWithWhereUniqueWithoutProjectInputSchema;
