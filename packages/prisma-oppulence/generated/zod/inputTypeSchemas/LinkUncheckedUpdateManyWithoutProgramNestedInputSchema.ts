import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkCreateWithoutProgramInputSchema } from './LinkCreateWithoutProgramInputSchema';
import { LinkUncheckedCreateWithoutProgramInputSchema } from './LinkUncheckedCreateWithoutProgramInputSchema';
import { LinkCreateOrConnectWithoutProgramInputSchema } from './LinkCreateOrConnectWithoutProgramInputSchema';
import { LinkUpsertWithWhereUniqueWithoutProgramInputSchema } from './LinkUpsertWithWhereUniqueWithoutProgramInputSchema';
import { LinkCreateManyProgramInputEnvelopeSchema } from './LinkCreateManyProgramInputEnvelopeSchema';
import { LinkWhereUniqueInputSchema } from './LinkWhereUniqueInputSchema';
import { LinkUpdateWithWhereUniqueWithoutProgramInputSchema } from './LinkUpdateWithWhereUniqueWithoutProgramInputSchema';
import { LinkUpdateManyWithWhereWithoutProgramInputSchema } from './LinkUpdateManyWithWhereWithoutProgramInputSchema';
import { LinkScalarWhereInputSchema } from './LinkScalarWhereInputSchema';

export const LinkUncheckedUpdateManyWithoutProgramNestedInputSchema: z.ZodType<Prisma.LinkUncheckedUpdateManyWithoutProgramNestedInput> = z.object({
  create: z.union([ z.lazy(() => LinkCreateWithoutProgramInputSchema),z.lazy(() => LinkCreateWithoutProgramInputSchema).array(),z.lazy(() => LinkUncheckedCreateWithoutProgramInputSchema),z.lazy(() => LinkUncheckedCreateWithoutProgramInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LinkCreateOrConnectWithoutProgramInputSchema),z.lazy(() => LinkCreateOrConnectWithoutProgramInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LinkUpsertWithWhereUniqueWithoutProgramInputSchema),z.lazy(() => LinkUpsertWithWhereUniqueWithoutProgramInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LinkCreateManyProgramInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LinkWhereUniqueInputSchema),z.lazy(() => LinkWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LinkWhereUniqueInputSchema),z.lazy(() => LinkWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LinkWhereUniqueInputSchema),z.lazy(() => LinkWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LinkWhereUniqueInputSchema),z.lazy(() => LinkWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LinkUpdateWithWhereUniqueWithoutProgramInputSchema),z.lazy(() => LinkUpdateWithWhereUniqueWithoutProgramInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LinkUpdateManyWithWhereWithoutProgramInputSchema),z.lazy(() => LinkUpdateManyWithWhereWithoutProgramInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LinkScalarWhereInputSchema),z.lazy(() => LinkScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default LinkUncheckedUpdateManyWithoutProgramNestedInputSchema;
