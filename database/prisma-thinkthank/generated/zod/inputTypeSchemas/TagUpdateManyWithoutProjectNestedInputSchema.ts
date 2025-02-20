import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateWithoutProjectInputSchema } from './TagCreateWithoutProjectInputSchema';
import { TagUncheckedCreateWithoutProjectInputSchema } from './TagUncheckedCreateWithoutProjectInputSchema';
import { TagCreateOrConnectWithoutProjectInputSchema } from './TagCreateOrConnectWithoutProjectInputSchema';
import { TagUpsertWithWhereUniqueWithoutProjectInputSchema } from './TagUpsertWithWhereUniqueWithoutProjectInputSchema';
import { TagCreateManyProjectInputEnvelopeSchema } from './TagCreateManyProjectInputEnvelopeSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithWhereUniqueWithoutProjectInputSchema } from './TagUpdateWithWhereUniqueWithoutProjectInputSchema';
import { TagUpdateManyWithWhereWithoutProjectInputSchema } from './TagUpdateManyWithWhereWithoutProjectInputSchema';
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema';

export const TagUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.TagUpdateManyWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutProjectInputSchema),z.lazy(() => TagCreateWithoutProjectInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutProjectInputSchema),z.lazy(() => TagUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutProjectInputSchema),z.lazy(() => TagCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TagUpsertWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => TagUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TagUpdateWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => TagUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TagUpdateManyWithWhereWithoutProjectInputSchema),z.lazy(() => TagUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TagScalarWhereInputSchema),z.lazy(() => TagScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TagUpdateManyWithoutProjectNestedInputSchema;
