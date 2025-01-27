import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramWhereInputSchema } from './ProgramWhereInputSchema';
import { ProgramUpdateWithoutResourcesInputSchema } from './ProgramUpdateWithoutResourcesInputSchema';
import { ProgramUncheckedUpdateWithoutResourcesInputSchema } from './ProgramUncheckedUpdateWithoutResourcesInputSchema';

export const ProgramUpdateToOneWithWhereWithoutResourcesInputSchema: z.ZodType<Prisma.ProgramUpdateToOneWithWhereWithoutResourcesInput> = z.object({
  where: z.lazy(() => ProgramWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProgramUpdateWithoutResourcesInputSchema),z.lazy(() => ProgramUncheckedUpdateWithoutResourcesInputSchema) ]),
}).strict();

export default ProgramUpdateToOneWithWhereWithoutResourcesInputSchema;
