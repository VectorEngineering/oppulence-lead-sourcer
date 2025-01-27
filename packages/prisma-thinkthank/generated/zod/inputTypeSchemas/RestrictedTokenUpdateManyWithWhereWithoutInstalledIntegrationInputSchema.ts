import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RestrictedTokenScalarWhereInputSchema } from './RestrictedTokenScalarWhereInputSchema';
import { RestrictedTokenUpdateManyMutationInputSchema } from './RestrictedTokenUpdateManyMutationInputSchema';
import { RestrictedTokenUncheckedUpdateManyWithoutInstalledIntegrationInputSchema } from './RestrictedTokenUncheckedUpdateManyWithoutInstalledIntegrationInputSchema';

export const RestrictedTokenUpdateManyWithWhereWithoutInstalledIntegrationInputSchema: z.ZodType<Prisma.RestrictedTokenUpdateManyWithWhereWithoutInstalledIntegrationInput> = z.object({
  where: z.lazy(() => RestrictedTokenScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RestrictedTokenUpdateManyMutationInputSchema),z.lazy(() => RestrictedTokenUncheckedUpdateManyWithoutInstalledIntegrationInputSchema) ]),
}).strict();

export default RestrictedTokenUpdateManyWithWhereWithoutInstalledIntegrationInputSchema;
