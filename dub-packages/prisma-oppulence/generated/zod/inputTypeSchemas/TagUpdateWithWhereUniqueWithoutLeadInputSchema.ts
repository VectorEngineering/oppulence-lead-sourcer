import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithoutLeadInputSchema } from './TagUpdateWithoutLeadInputSchema';
import { TagUncheckedUpdateWithoutLeadInputSchema } from './TagUncheckedUpdateWithoutLeadInputSchema';

export const TagUpdateWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.TagUpdateWithWhereUniqueWithoutLeadInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TagUpdateWithoutLeadInputSchema),z.lazy(() => TagUncheckedUpdateWithoutLeadInputSchema) ]),
}).strict();

export default TagUpdateWithWhereUniqueWithoutLeadInputSchema;
