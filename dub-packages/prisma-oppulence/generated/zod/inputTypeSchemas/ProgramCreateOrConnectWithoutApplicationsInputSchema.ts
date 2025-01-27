import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramWhereUniqueInputSchema } from './ProgramWhereUniqueInputSchema';
import { ProgramCreateWithoutApplicationsInputSchema } from './ProgramCreateWithoutApplicationsInputSchema';
import { ProgramUncheckedCreateWithoutApplicationsInputSchema } from './ProgramUncheckedCreateWithoutApplicationsInputSchema';

export const ProgramCreateOrConnectWithoutApplicationsInputSchema: z.ZodType<Prisma.ProgramCreateOrConnectWithoutApplicationsInput> = z.object({
  where: z.lazy(() => ProgramWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProgramCreateWithoutApplicationsInputSchema),z.lazy(() => ProgramUncheckedCreateWithoutApplicationsInputSchema) ]),
}).strict();

export default ProgramCreateOrConnectWithoutApplicationsInputSchema;
