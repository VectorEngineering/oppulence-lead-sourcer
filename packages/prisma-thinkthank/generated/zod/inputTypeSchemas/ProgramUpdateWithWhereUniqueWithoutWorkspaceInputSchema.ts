import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramWhereUniqueInputSchema } from './ProgramWhereUniqueInputSchema';
import { ProgramUpdateWithoutWorkspaceInputSchema } from './ProgramUpdateWithoutWorkspaceInputSchema';
import { ProgramUncheckedUpdateWithoutWorkspaceInputSchema } from './ProgramUncheckedUpdateWithoutWorkspaceInputSchema';

export const ProgramUpdateWithWhereUniqueWithoutWorkspaceInputSchema: z.ZodType<Prisma.ProgramUpdateWithWhereUniqueWithoutWorkspaceInput> = z.object({
  where: z.lazy(() => ProgramWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProgramUpdateWithoutWorkspaceInputSchema),z.lazy(() => ProgramUncheckedUpdateWithoutWorkspaceInputSchema) ]),
}).strict();

export default ProgramUpdateWithWhereUniqueWithoutWorkspaceInputSchema;
