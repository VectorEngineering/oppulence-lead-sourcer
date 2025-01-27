import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkTagWhereUniqueInputSchema } from './LinkTagWhereUniqueInputSchema';
import { LinkTagUpdateWithoutLinkInputSchema } from './LinkTagUpdateWithoutLinkInputSchema';
import { LinkTagUncheckedUpdateWithoutLinkInputSchema } from './LinkTagUncheckedUpdateWithoutLinkInputSchema';
import { LinkTagCreateWithoutLinkInputSchema } from './LinkTagCreateWithoutLinkInputSchema';
import { LinkTagUncheckedCreateWithoutLinkInputSchema } from './LinkTagUncheckedCreateWithoutLinkInputSchema';

export const LinkTagUpsertWithWhereUniqueWithoutLinkInputSchema: z.ZodType<Prisma.LinkTagUpsertWithWhereUniqueWithoutLinkInput> = z.object({
  where: z.lazy(() => LinkTagWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LinkTagUpdateWithoutLinkInputSchema),z.lazy(() => LinkTagUncheckedUpdateWithoutLinkInputSchema) ]),
  create: z.union([ z.lazy(() => LinkTagCreateWithoutLinkInputSchema),z.lazy(() => LinkTagUncheckedCreateWithoutLinkInputSchema) ]),
}).strict();

export default LinkTagUpsertWithWhereUniqueWithoutLinkInputSchema;
