import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateWithoutLeadInputSchema } from './TagCreateWithoutLeadInputSchema';
import { TagUncheckedCreateWithoutLeadInputSchema } from './TagUncheckedCreateWithoutLeadInputSchema';
import { TagCreateOrConnectWithoutLeadInputSchema } from './TagCreateOrConnectWithoutLeadInputSchema';
import { TagUpsertWithWhereUniqueWithoutLeadInputSchema } from './TagUpsertWithWhereUniqueWithoutLeadInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithWhereUniqueWithoutLeadInputSchema } from './TagUpdateWithWhereUniqueWithoutLeadInputSchema';
import { TagUpdateManyWithWhereWithoutLeadInputSchema } from './TagUpdateManyWithWhereWithoutLeadInputSchema';
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema';

export const TagUncheckedUpdateManyWithoutLeadNestedInputSchema: z.ZodType<Prisma.TagUncheckedUpdateManyWithoutLeadNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutLeadInputSchema),z.lazy(() => TagCreateWithoutLeadInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutLeadInputSchema),z.lazy(() => TagUncheckedCreateWithoutLeadInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutLeadInputSchema),z.lazy(() => TagCreateOrConnectWithoutLeadInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TagUpsertWithWhereUniqueWithoutLeadInputSchema),z.lazy(() => TagUpsertWithWhereUniqueWithoutLeadInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TagUpdateWithWhereUniqueWithoutLeadInputSchema),z.lazy(() => TagUpdateWithWhereUniqueWithoutLeadInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TagUpdateManyWithWhereWithoutLeadInputSchema),z.lazy(() => TagUpdateManyWithWhereWithoutLeadInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TagScalarWhereInputSchema),z.lazy(() => TagScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TagUncheckedUpdateManyWithoutLeadNestedInputSchema;
