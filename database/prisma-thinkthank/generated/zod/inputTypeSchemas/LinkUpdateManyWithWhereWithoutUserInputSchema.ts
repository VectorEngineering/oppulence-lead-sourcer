import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkScalarWhereInputSchema } from './LinkScalarWhereInputSchema';
import { LinkUpdateManyMutationInputSchema } from './LinkUpdateManyMutationInputSchema';
import { LinkUncheckedUpdateManyWithoutUserInputSchema } from './LinkUncheckedUpdateManyWithoutUserInputSchema';

export const LinkUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.LinkUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => LinkScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LinkUpdateManyMutationInputSchema),z.lazy(() => LinkUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default LinkUpdateManyWithWhereWithoutUserInputSchema;
