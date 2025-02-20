import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateWithoutProjectInputSchema } from './TagCreateWithoutProjectInputSchema';
import { TagUncheckedCreateWithoutProjectInputSchema } from './TagUncheckedCreateWithoutProjectInputSchema';
import { TagCreateOrConnectWithoutProjectInputSchema } from './TagCreateOrConnectWithoutProjectInputSchema';
import { TagCreateManyProjectInputEnvelopeSchema } from './TagCreateManyProjectInputEnvelopeSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';

export const TagCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.TagCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutProjectInputSchema),z.lazy(() => TagCreateWithoutProjectInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutProjectInputSchema),z.lazy(() => TagUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutProjectInputSchema),z.lazy(() => TagCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TagCreateNestedManyWithoutProjectInputSchema;
