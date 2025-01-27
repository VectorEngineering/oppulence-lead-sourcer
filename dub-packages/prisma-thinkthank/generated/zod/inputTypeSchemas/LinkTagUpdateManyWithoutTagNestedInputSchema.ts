import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkTagCreateWithoutTagInputSchema } from './LinkTagCreateWithoutTagInputSchema';
import { LinkTagUncheckedCreateWithoutTagInputSchema } from './LinkTagUncheckedCreateWithoutTagInputSchema';
import { LinkTagCreateOrConnectWithoutTagInputSchema } from './LinkTagCreateOrConnectWithoutTagInputSchema';
import { LinkTagUpsertWithWhereUniqueWithoutTagInputSchema } from './LinkTagUpsertWithWhereUniqueWithoutTagInputSchema';
import { LinkTagCreateManyTagInputEnvelopeSchema } from './LinkTagCreateManyTagInputEnvelopeSchema';
import { LinkTagWhereUniqueInputSchema } from './LinkTagWhereUniqueInputSchema';
import { LinkTagUpdateWithWhereUniqueWithoutTagInputSchema } from './LinkTagUpdateWithWhereUniqueWithoutTagInputSchema';
import { LinkTagUpdateManyWithWhereWithoutTagInputSchema } from './LinkTagUpdateManyWithWhereWithoutTagInputSchema';
import { LinkTagScalarWhereInputSchema } from './LinkTagScalarWhereInputSchema';

export const LinkTagUpdateManyWithoutTagNestedInputSchema: z.ZodType<Prisma.LinkTagUpdateManyWithoutTagNestedInput> = z.object({
  create: z.union([ z.lazy(() => LinkTagCreateWithoutTagInputSchema),z.lazy(() => LinkTagCreateWithoutTagInputSchema).array(),z.lazy(() => LinkTagUncheckedCreateWithoutTagInputSchema),z.lazy(() => LinkTagUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LinkTagCreateOrConnectWithoutTagInputSchema),z.lazy(() => LinkTagCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LinkTagUpsertWithWhereUniqueWithoutTagInputSchema),z.lazy(() => LinkTagUpsertWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LinkTagCreateManyTagInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LinkTagWhereUniqueInputSchema),z.lazy(() => LinkTagWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LinkTagWhereUniqueInputSchema),z.lazy(() => LinkTagWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LinkTagWhereUniqueInputSchema),z.lazy(() => LinkTagWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LinkTagWhereUniqueInputSchema),z.lazy(() => LinkTagWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LinkTagUpdateWithWhereUniqueWithoutTagInputSchema),z.lazy(() => LinkTagUpdateWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LinkTagUpdateManyWithWhereWithoutTagInputSchema),z.lazy(() => LinkTagUpdateManyWithWhereWithoutTagInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LinkTagScalarWhereInputSchema),z.lazy(() => LinkTagScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default LinkTagUpdateManyWithoutTagNestedInputSchema;
