import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkTagWhereUniqueInputSchema } from './LinkTagWhereUniqueInputSchema';
import { LinkTagUpdateWithoutTagInputSchema } from './LinkTagUpdateWithoutTagInputSchema';
import { LinkTagUncheckedUpdateWithoutTagInputSchema } from './LinkTagUncheckedUpdateWithoutTagInputSchema';
import { LinkTagCreateWithoutTagInputSchema } from './LinkTagCreateWithoutTagInputSchema';
import { LinkTagUncheckedCreateWithoutTagInputSchema } from './LinkTagUncheckedCreateWithoutTagInputSchema';

export const LinkTagUpsertWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.LinkTagUpsertWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => LinkTagWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LinkTagUpdateWithoutTagInputSchema),z.lazy(() => LinkTagUncheckedUpdateWithoutTagInputSchema) ]),
  create: z.union([ z.lazy(() => LinkTagCreateWithoutTagInputSchema),z.lazy(() => LinkTagUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default LinkTagUpsertWithWhereUniqueWithoutTagInputSchema;
