import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramWhereUniqueInputSchema } from './ProgramWhereUniqueInputSchema';
import { ProgramCreateWithoutResourcesInputSchema } from './ProgramCreateWithoutResourcesInputSchema';
import { ProgramUncheckedCreateWithoutResourcesInputSchema } from './ProgramUncheckedCreateWithoutResourcesInputSchema';

export const ProgramCreateOrConnectWithoutResourcesInputSchema: z.ZodType<Prisma.ProgramCreateOrConnectWithoutResourcesInput> = z.object({
  where: z.lazy(() => ProgramWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProgramCreateWithoutResourcesInputSchema),z.lazy(() => ProgramUncheckedCreateWithoutResourcesInputSchema) ]),
}).strict();

export default ProgramCreateOrConnectWithoutResourcesInputSchema;
