import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkWhereInputSchema } from './LinkWhereInputSchema';
import { LinkUpdateWithoutTagsInputSchema } from './LinkUpdateWithoutTagsInputSchema';
import { LinkUncheckedUpdateWithoutTagsInputSchema } from './LinkUncheckedUpdateWithoutTagsInputSchema';

export const LinkUpdateToOneWithWhereWithoutTagsInputSchema: z.ZodType<Prisma.LinkUpdateToOneWithWhereWithoutTagsInput> = z.object({
  where: z.lazy(() => LinkWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LinkUpdateWithoutTagsInputSchema),z.lazy(() => LinkUncheckedUpdateWithoutTagsInputSchema) ]),
}).strict();

export default LinkUpdateToOneWithWhereWithoutTagsInputSchema;
