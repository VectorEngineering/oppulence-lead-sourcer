import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkWhereUniqueInputSchema } from './LinkWhereUniqueInputSchema';
import { LinkUpdateWithoutProjectDomainInputSchema } from './LinkUpdateWithoutProjectDomainInputSchema';
import { LinkUncheckedUpdateWithoutProjectDomainInputSchema } from './LinkUncheckedUpdateWithoutProjectDomainInputSchema';

export const LinkUpdateWithWhereUniqueWithoutProjectDomainInputSchema: z.ZodType<Prisma.LinkUpdateWithWhereUniqueWithoutProjectDomainInput> = z.object({
  where: z.lazy(() => LinkWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LinkUpdateWithoutProjectDomainInputSchema),z.lazy(() => LinkUncheckedUpdateWithoutProjectDomainInputSchema) ]),
}).strict();

export default LinkUpdateWithWhereUniqueWithoutProjectDomainInputSchema;
