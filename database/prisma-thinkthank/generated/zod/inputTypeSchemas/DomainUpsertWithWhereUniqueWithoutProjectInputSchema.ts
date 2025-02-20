import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DomainWhereUniqueInputSchema } from './DomainWhereUniqueInputSchema';
import { DomainUpdateWithoutProjectInputSchema } from './DomainUpdateWithoutProjectInputSchema';
import { DomainUncheckedUpdateWithoutProjectInputSchema } from './DomainUncheckedUpdateWithoutProjectInputSchema';
import { DomainCreateWithoutProjectInputSchema } from './DomainCreateWithoutProjectInputSchema';
import { DomainUncheckedCreateWithoutProjectInputSchema } from './DomainUncheckedCreateWithoutProjectInputSchema';

export const DomainUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.DomainUpsertWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => DomainWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => DomainUpdateWithoutProjectInputSchema),z.lazy(() => DomainUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => DomainCreateWithoutProjectInputSchema),z.lazy(() => DomainUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default DomainUpsertWithWhereUniqueWithoutProjectInputSchema;
