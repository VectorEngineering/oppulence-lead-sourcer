import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DefaultDomainsCreateWithoutProjectInputSchema } from './DefaultDomainsCreateWithoutProjectInputSchema';
import { DefaultDomainsUncheckedCreateWithoutProjectInputSchema } from './DefaultDomainsUncheckedCreateWithoutProjectInputSchema';
import { DefaultDomainsCreateOrConnectWithoutProjectInputSchema } from './DefaultDomainsCreateOrConnectWithoutProjectInputSchema';
import { DefaultDomainsCreateManyProjectInputEnvelopeSchema } from './DefaultDomainsCreateManyProjectInputEnvelopeSchema';
import { DefaultDomainsWhereUniqueInputSchema } from './DefaultDomainsWhereUniqueInputSchema';

export const DefaultDomainsUncheckedCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.DefaultDomainsUncheckedCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => DefaultDomainsCreateWithoutProjectInputSchema),z.lazy(() => DefaultDomainsCreateWithoutProjectInputSchema).array(),z.lazy(() => DefaultDomainsUncheckedCreateWithoutProjectInputSchema),z.lazy(() => DefaultDomainsUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DefaultDomainsCreateOrConnectWithoutProjectInputSchema),z.lazy(() => DefaultDomainsCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DefaultDomainsCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DefaultDomainsWhereUniqueInputSchema),z.lazy(() => DefaultDomainsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default DefaultDomainsUncheckedCreateNestedManyWithoutProjectInputSchema;
