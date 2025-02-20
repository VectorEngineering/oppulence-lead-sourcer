import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkWhereUniqueInputSchema } from './LinkWhereUniqueInputSchema';
import { LinkUpdateWithoutProgramInputSchema } from './LinkUpdateWithoutProgramInputSchema';
import { LinkUncheckedUpdateWithoutProgramInputSchema } from './LinkUncheckedUpdateWithoutProgramInputSchema';

export const LinkUpdateWithWhereUniqueWithoutProgramInputSchema: z.ZodType<Prisma.LinkUpdateWithWhereUniqueWithoutProgramInput> = z.object({
  where: z.lazy(() => LinkWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LinkUpdateWithoutProgramInputSchema),z.lazy(() => LinkUncheckedUpdateWithoutProgramInputSchema) ]),
}).strict();

export default LinkUpdateWithWhereUniqueWithoutProgramInputSchema;
