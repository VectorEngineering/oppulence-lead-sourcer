import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema';
import { TagUpdateManyMutationInputSchema } from './TagUpdateManyMutationInputSchema';
import { TagUncheckedUpdateManyWithoutLeadInputSchema } from './TagUncheckedUpdateManyWithoutLeadInputSchema';

export const TagUpdateManyWithWhereWithoutLeadInputSchema: z.ZodType<Prisma.TagUpdateManyWithWhereWithoutLeadInput> = z.object({
  where: z.lazy(() => TagScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TagUpdateManyMutationInputSchema),z.lazy(() => TagUncheckedUpdateManyWithoutLeadInputSchema) ]),
}).strict();

export default TagUpdateManyWithWhereWithoutLeadInputSchema;
