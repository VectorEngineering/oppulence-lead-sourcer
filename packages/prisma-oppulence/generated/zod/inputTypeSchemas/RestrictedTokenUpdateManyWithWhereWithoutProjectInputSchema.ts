import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RestrictedTokenScalarWhereInputSchema } from './RestrictedTokenScalarWhereInputSchema';
import { RestrictedTokenUpdateManyMutationInputSchema } from './RestrictedTokenUpdateManyMutationInputSchema';
import { RestrictedTokenUncheckedUpdateManyWithoutProjectInputSchema } from './RestrictedTokenUncheckedUpdateManyWithoutProjectInputSchema';

export const RestrictedTokenUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.RestrictedTokenUpdateManyWithWhereWithoutProjectInput> = z.object({
  where: z.lazy(() => RestrictedTokenScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RestrictedTokenUpdateManyMutationInputSchema),z.lazy(() => RestrictedTokenUncheckedUpdateManyWithoutProjectInputSchema) ]),
}).strict();

export default RestrictedTokenUpdateManyWithWhereWithoutProjectInputSchema;
