import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramScalarWhereInputSchema } from './ProgramScalarWhereInputSchema';
import { ProgramUpdateManyMutationInputSchema } from './ProgramUpdateManyMutationInputSchema';
import { ProgramUncheckedUpdateManyWithoutWorkspaceInputSchema } from './ProgramUncheckedUpdateManyWithoutWorkspaceInputSchema';

export const ProgramUpdateManyWithWhereWithoutWorkspaceInputSchema: z.ZodType<Prisma.ProgramUpdateManyWithWhereWithoutWorkspaceInput> = z.object({
  where: z.lazy(() => ProgramScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProgramUpdateManyMutationInputSchema),z.lazy(() => ProgramUncheckedUpdateManyWithoutWorkspaceInputSchema) ]),
}).strict();

export default ProgramUpdateManyWithWhereWithoutWorkspaceInputSchema;
