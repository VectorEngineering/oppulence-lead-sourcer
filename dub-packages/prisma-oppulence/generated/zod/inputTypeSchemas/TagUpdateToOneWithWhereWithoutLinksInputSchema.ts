import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereInputSchema } from './TagWhereInputSchema';
import { TagUpdateWithoutLinksInputSchema } from './TagUpdateWithoutLinksInputSchema';
import { TagUncheckedUpdateWithoutLinksInputSchema } from './TagUncheckedUpdateWithoutLinksInputSchema';

export const TagUpdateToOneWithWhereWithoutLinksInputSchema: z.ZodType<Prisma.TagUpdateToOneWithWhereWithoutLinksInput> = z.object({
  where: z.lazy(() => TagWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TagUpdateWithoutLinksInputSchema),z.lazy(() => TagUncheckedUpdateWithoutLinksInputSchema) ]),
}).strict();

export default TagUpdateToOneWithWhereWithoutLinksInputSchema;
