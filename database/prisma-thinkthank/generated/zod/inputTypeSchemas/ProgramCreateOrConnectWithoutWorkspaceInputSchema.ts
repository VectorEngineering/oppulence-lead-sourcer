import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramWhereUniqueInputSchema } from './ProgramWhereUniqueInputSchema';
import { ProgramCreateWithoutWorkspaceInputSchema } from './ProgramCreateWithoutWorkspaceInputSchema';
import { ProgramUncheckedCreateWithoutWorkspaceInputSchema } from './ProgramUncheckedCreateWithoutWorkspaceInputSchema';

export const ProgramCreateOrConnectWithoutWorkspaceInputSchema: z.ZodType<Prisma.ProgramCreateOrConnectWithoutWorkspaceInput> = z.object({
  where: z.lazy(() => ProgramWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProgramCreateWithoutWorkspaceInputSchema),z.lazy(() => ProgramUncheckedCreateWithoutWorkspaceInputSchema) ]),
}).strict();

export default ProgramCreateOrConnectWithoutWorkspaceInputSchema;
