import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DefaultDomainsWhereUniqueInputSchema } from './DefaultDomainsWhereUniqueInputSchema';
import { DefaultDomainsUpdateWithoutProjectInputSchema } from './DefaultDomainsUpdateWithoutProjectInputSchema';
import { DefaultDomainsUncheckedUpdateWithoutProjectInputSchema } from './DefaultDomainsUncheckedUpdateWithoutProjectInputSchema';
import { DefaultDomainsCreateWithoutProjectInputSchema } from './DefaultDomainsCreateWithoutProjectInputSchema';
import { DefaultDomainsUncheckedCreateWithoutProjectInputSchema } from './DefaultDomainsUncheckedCreateWithoutProjectInputSchema';

export const DefaultDomainsUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.DefaultDomainsUpsertWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => DefaultDomainsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => DefaultDomainsUpdateWithoutProjectInputSchema),z.lazy(() => DefaultDomainsUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => DefaultDomainsCreateWithoutProjectInputSchema),z.lazy(() => DefaultDomainsUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default DefaultDomainsUpsertWithWhereUniqueWithoutProjectInputSchema;
