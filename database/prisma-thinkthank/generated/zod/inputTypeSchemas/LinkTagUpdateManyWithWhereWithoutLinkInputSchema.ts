import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkTagScalarWhereInputSchema } from './LinkTagScalarWhereInputSchema';
import { LinkTagUpdateManyMutationInputSchema } from './LinkTagUpdateManyMutationInputSchema';
import { LinkTagUncheckedUpdateManyWithoutLinkInputSchema } from './LinkTagUncheckedUpdateManyWithoutLinkInputSchema';

export const LinkTagUpdateManyWithWhereWithoutLinkInputSchema: z.ZodType<Prisma.LinkTagUpdateManyWithWhereWithoutLinkInput> = z.object({
  where: z.lazy(() => LinkTagScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LinkTagUpdateManyMutationInputSchema),z.lazy(() => LinkTagUncheckedUpdateManyWithoutLinkInputSchema) ]),
}).strict();

export default LinkTagUpdateManyWithWhereWithoutLinkInputSchema;
