import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SentEmailCreateWithoutProjectInputSchema } from './SentEmailCreateWithoutProjectInputSchema';
import { SentEmailUncheckedCreateWithoutProjectInputSchema } from './SentEmailUncheckedCreateWithoutProjectInputSchema';
import { SentEmailCreateOrConnectWithoutProjectInputSchema } from './SentEmailCreateOrConnectWithoutProjectInputSchema';
import { SentEmailUpsertWithWhereUniqueWithoutProjectInputSchema } from './SentEmailUpsertWithWhereUniqueWithoutProjectInputSchema';
import { SentEmailCreateManyProjectInputEnvelopeSchema } from './SentEmailCreateManyProjectInputEnvelopeSchema';
import { SentEmailWhereUniqueInputSchema } from './SentEmailWhereUniqueInputSchema';
import { SentEmailUpdateWithWhereUniqueWithoutProjectInputSchema } from './SentEmailUpdateWithWhereUniqueWithoutProjectInputSchema';
import { SentEmailUpdateManyWithWhereWithoutProjectInputSchema } from './SentEmailUpdateManyWithWhereWithoutProjectInputSchema';
import { SentEmailScalarWhereInputSchema } from './SentEmailScalarWhereInputSchema';

export const SentEmailUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.SentEmailUpdateManyWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => SentEmailCreateWithoutProjectInputSchema),z.lazy(() => SentEmailCreateWithoutProjectInputSchema).array(),z.lazy(() => SentEmailUncheckedCreateWithoutProjectInputSchema),z.lazy(() => SentEmailUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SentEmailCreateOrConnectWithoutProjectInputSchema),z.lazy(() => SentEmailCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SentEmailUpsertWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => SentEmailUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SentEmailCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SentEmailWhereUniqueInputSchema),z.lazy(() => SentEmailWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SentEmailWhereUniqueInputSchema),z.lazy(() => SentEmailWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SentEmailWhereUniqueInputSchema),z.lazy(() => SentEmailWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SentEmailWhereUniqueInputSchema),z.lazy(() => SentEmailWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SentEmailUpdateWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => SentEmailUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SentEmailUpdateManyWithWhereWithoutProjectInputSchema),z.lazy(() => SentEmailUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SentEmailScalarWhereInputSchema),z.lazy(() => SentEmailScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default SentEmailUpdateManyWithoutProjectNestedInputSchema;
