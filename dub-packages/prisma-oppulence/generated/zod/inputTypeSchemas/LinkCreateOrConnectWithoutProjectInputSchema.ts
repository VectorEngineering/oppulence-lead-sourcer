import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkWhereUniqueInputSchema } from './LinkWhereUniqueInputSchema';
import { LinkCreateWithoutProjectInputSchema } from './LinkCreateWithoutProjectInputSchema';
import { LinkUncheckedCreateWithoutProjectInputSchema } from './LinkUncheckedCreateWithoutProjectInputSchema';

export const LinkCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.LinkCreateOrConnectWithoutProjectInput> = z.object({
  where: z.lazy(() => LinkWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LinkCreateWithoutProjectInputSchema),z.lazy(() => LinkUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default LinkCreateOrConnectWithoutProjectInputSchema;
