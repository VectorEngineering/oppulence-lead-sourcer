import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DomainWhereUniqueInputSchema } from './DomainWhereUniqueInputSchema';
import { DomainUpdateWithoutProjectInputSchema } from './DomainUpdateWithoutProjectInputSchema';
import { DomainUncheckedUpdateWithoutProjectInputSchema } from './DomainUncheckedUpdateWithoutProjectInputSchema';

export const DomainUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.DomainUpdateWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => DomainWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => DomainUpdateWithoutProjectInputSchema),z.lazy(() => DomainUncheckedUpdateWithoutProjectInputSchema) ]),
}).strict();

export default DomainUpdateWithWhereUniqueWithoutProjectInputSchema;
