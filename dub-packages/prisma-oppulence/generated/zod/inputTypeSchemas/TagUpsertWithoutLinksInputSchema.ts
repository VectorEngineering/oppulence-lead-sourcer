import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagUpdateWithoutLinksInputSchema } from './TagUpdateWithoutLinksInputSchema';
import { TagUncheckedUpdateWithoutLinksInputSchema } from './TagUncheckedUpdateWithoutLinksInputSchema';
import { TagCreateWithoutLinksInputSchema } from './TagCreateWithoutLinksInputSchema';
import { TagUncheckedCreateWithoutLinksInputSchema } from './TagUncheckedCreateWithoutLinksInputSchema';
import { TagWhereInputSchema } from './TagWhereInputSchema';

export const TagUpsertWithoutLinksInputSchema: z.ZodType<Prisma.TagUpsertWithoutLinksInput> = z.object({
  update: z.union([ z.lazy(() => TagUpdateWithoutLinksInputSchema),z.lazy(() => TagUncheckedUpdateWithoutLinksInputSchema) ]),
  create: z.union([ z.lazy(() => TagCreateWithoutLinksInputSchema),z.lazy(() => TagUncheckedCreateWithoutLinksInputSchema) ]),
  where: z.lazy(() => TagWhereInputSchema).optional()
}).strict();

export default TagUpsertWithoutLinksInputSchema;
