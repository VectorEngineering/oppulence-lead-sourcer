import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SentEmailWhereUniqueInputSchema } from './SentEmailWhereUniqueInputSchema';
import { SentEmailCreateWithoutProjectInputSchema } from './SentEmailCreateWithoutProjectInputSchema';
import { SentEmailUncheckedCreateWithoutProjectInputSchema } from './SentEmailUncheckedCreateWithoutProjectInputSchema';

export const SentEmailCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.SentEmailCreateOrConnectWithoutProjectInput> = z.object({
  where: z.lazy(() => SentEmailWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SentEmailCreateWithoutProjectInputSchema),z.lazy(() => SentEmailUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default SentEmailCreateOrConnectWithoutProjectInputSchema;
