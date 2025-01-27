import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkCreateWithoutProjectInputSchema } from './LinkCreateWithoutProjectInputSchema';
import { LinkUncheckedCreateWithoutProjectInputSchema } from './LinkUncheckedCreateWithoutProjectInputSchema';
import { LinkCreateOrConnectWithoutProjectInputSchema } from './LinkCreateOrConnectWithoutProjectInputSchema';
import { LinkCreateManyProjectInputEnvelopeSchema } from './LinkCreateManyProjectInputEnvelopeSchema';
import { LinkWhereUniqueInputSchema } from './LinkWhereUniqueInputSchema';

export const LinkCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.LinkCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => LinkCreateWithoutProjectInputSchema),z.lazy(() => LinkCreateWithoutProjectInputSchema).array(),z.lazy(() => LinkUncheckedCreateWithoutProjectInputSchema),z.lazy(() => LinkUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LinkCreateOrConnectWithoutProjectInputSchema),z.lazy(() => LinkCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LinkCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LinkWhereUniqueInputSchema),z.lazy(() => LinkWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default LinkCreateNestedManyWithoutProjectInputSchema;
