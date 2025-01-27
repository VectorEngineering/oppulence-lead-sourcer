import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkTagWhereUniqueInputSchema } from './LinkTagWhereUniqueInputSchema';
import { LinkTagUpdateWithoutTagInputSchema } from './LinkTagUpdateWithoutTagInputSchema';
import { LinkTagUncheckedUpdateWithoutTagInputSchema } from './LinkTagUncheckedUpdateWithoutTagInputSchema';

export const LinkTagUpdateWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.LinkTagUpdateWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => LinkTagWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LinkTagUpdateWithoutTagInputSchema),z.lazy(() => LinkTagUncheckedUpdateWithoutTagInputSchema) ]),
}).strict();

export default LinkTagUpdateWithWhereUniqueWithoutTagInputSchema;
