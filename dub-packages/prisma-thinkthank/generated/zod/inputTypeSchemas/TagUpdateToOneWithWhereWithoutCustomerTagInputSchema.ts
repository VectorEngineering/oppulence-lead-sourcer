import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereInputSchema } from './TagWhereInputSchema';
import { TagUpdateWithoutCustomerTagInputSchema } from './TagUpdateWithoutCustomerTagInputSchema';
import { TagUncheckedUpdateWithoutCustomerTagInputSchema } from './TagUncheckedUpdateWithoutCustomerTagInputSchema';

export const TagUpdateToOneWithWhereWithoutCustomerTagInputSchema: z.ZodType<Prisma.TagUpdateToOneWithWhereWithoutCustomerTagInput> = z.object({
  where: z.lazy(() => TagWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TagUpdateWithoutCustomerTagInputSchema),z.lazy(() => TagUncheckedUpdateWithoutCustomerTagInputSchema) ]),
}).strict();

export default TagUpdateToOneWithWhereWithoutCustomerTagInputSchema;
