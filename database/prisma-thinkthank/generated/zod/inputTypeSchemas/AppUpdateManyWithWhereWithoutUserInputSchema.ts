import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppScalarWhereInputSchema } from './AppScalarWhereInputSchema';
import { AppUpdateManyMutationInputSchema } from './AppUpdateManyMutationInputSchema';
import { AppUncheckedUpdateManyWithoutUserInputSchema } from './AppUncheckedUpdateManyWithoutUserInputSchema';

export const AppUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.AppUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => AppScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AppUpdateManyMutationInputSchema),z.lazy(() => AppUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default AppUpdateManyWithWhereWithoutUserInputSchema;
