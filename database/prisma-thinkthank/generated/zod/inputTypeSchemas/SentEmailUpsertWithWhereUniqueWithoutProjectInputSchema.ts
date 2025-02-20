import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SentEmailWhereUniqueInputSchema } from './SentEmailWhereUniqueInputSchema';
import { SentEmailUpdateWithoutProjectInputSchema } from './SentEmailUpdateWithoutProjectInputSchema';
import { SentEmailUncheckedUpdateWithoutProjectInputSchema } from './SentEmailUncheckedUpdateWithoutProjectInputSchema';
import { SentEmailCreateWithoutProjectInputSchema } from './SentEmailCreateWithoutProjectInputSchema';
import { SentEmailUncheckedCreateWithoutProjectInputSchema } from './SentEmailUncheckedCreateWithoutProjectInputSchema';

export const SentEmailUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.SentEmailUpsertWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => SentEmailWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SentEmailUpdateWithoutProjectInputSchema),z.lazy(() => SentEmailUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => SentEmailCreateWithoutProjectInputSchema),z.lazy(() => SentEmailUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default SentEmailUpsertWithWhereUniqueWithoutProjectInputSchema;
