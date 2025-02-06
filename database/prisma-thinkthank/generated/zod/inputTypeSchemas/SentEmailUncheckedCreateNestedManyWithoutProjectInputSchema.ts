import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SentEmailCreateWithoutProjectInputSchema } from './SentEmailCreateWithoutProjectInputSchema';
import { SentEmailUncheckedCreateWithoutProjectInputSchema } from './SentEmailUncheckedCreateWithoutProjectInputSchema';
import { SentEmailCreateOrConnectWithoutProjectInputSchema } from './SentEmailCreateOrConnectWithoutProjectInputSchema';
import { SentEmailCreateManyProjectInputEnvelopeSchema } from './SentEmailCreateManyProjectInputEnvelopeSchema';
import { SentEmailWhereUniqueInputSchema } from './SentEmailWhereUniqueInputSchema';

export const SentEmailUncheckedCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.SentEmailUncheckedCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => SentEmailCreateWithoutProjectInputSchema),z.lazy(() => SentEmailCreateWithoutProjectInputSchema).array(),z.lazy(() => SentEmailUncheckedCreateWithoutProjectInputSchema),z.lazy(() => SentEmailUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SentEmailCreateOrConnectWithoutProjectInputSchema),z.lazy(() => SentEmailCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SentEmailCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SentEmailWhereUniqueInputSchema),z.lazy(() => SentEmailWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default SentEmailUncheckedCreateNestedManyWithoutProjectInputSchema;
