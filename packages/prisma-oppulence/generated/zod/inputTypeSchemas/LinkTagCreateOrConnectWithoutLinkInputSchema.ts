import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkTagWhereUniqueInputSchema } from './LinkTagWhereUniqueInputSchema';
import { LinkTagCreateWithoutLinkInputSchema } from './LinkTagCreateWithoutLinkInputSchema';
import { LinkTagUncheckedCreateWithoutLinkInputSchema } from './LinkTagUncheckedCreateWithoutLinkInputSchema';

export const LinkTagCreateOrConnectWithoutLinkInputSchema: z.ZodType<Prisma.LinkTagCreateOrConnectWithoutLinkInput> = z.object({
  where: z.lazy(() => LinkTagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LinkTagCreateWithoutLinkInputSchema),z.lazy(() => LinkTagUncheckedCreateWithoutLinkInputSchema) ]),
}).strict();

export default LinkTagCreateOrConnectWithoutLinkInputSchema;
