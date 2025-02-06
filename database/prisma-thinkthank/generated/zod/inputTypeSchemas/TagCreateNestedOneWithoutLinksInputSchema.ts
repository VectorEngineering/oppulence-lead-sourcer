import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateWithoutLinksInputSchema } from './TagCreateWithoutLinksInputSchema';
import { TagUncheckedCreateWithoutLinksInputSchema } from './TagUncheckedCreateWithoutLinksInputSchema';
import { TagCreateOrConnectWithoutLinksInputSchema } from './TagCreateOrConnectWithoutLinksInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';

export const TagCreateNestedOneWithoutLinksInputSchema: z.ZodType<Prisma.TagCreateNestedOneWithoutLinksInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutLinksInputSchema),z.lazy(() => TagUncheckedCreateWithoutLinksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutLinksInputSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputSchema).optional()
}).strict();

export default TagCreateNestedOneWithoutLinksInputSchema;
