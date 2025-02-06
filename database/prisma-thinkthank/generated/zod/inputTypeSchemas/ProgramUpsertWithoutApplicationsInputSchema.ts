import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramUpdateWithoutApplicationsInputSchema } from './ProgramUpdateWithoutApplicationsInputSchema';
import { ProgramUncheckedUpdateWithoutApplicationsInputSchema } from './ProgramUncheckedUpdateWithoutApplicationsInputSchema';
import { ProgramCreateWithoutApplicationsInputSchema } from './ProgramCreateWithoutApplicationsInputSchema';
import { ProgramUncheckedCreateWithoutApplicationsInputSchema } from './ProgramUncheckedCreateWithoutApplicationsInputSchema';
import { ProgramWhereInputSchema } from './ProgramWhereInputSchema';

export const ProgramUpsertWithoutApplicationsInputSchema: z.ZodType<Prisma.ProgramUpsertWithoutApplicationsInput> = z.object({
  update: z.union([ z.lazy(() => ProgramUpdateWithoutApplicationsInputSchema),z.lazy(() => ProgramUncheckedUpdateWithoutApplicationsInputSchema) ]),
  create: z.union([ z.lazy(() => ProgramCreateWithoutApplicationsInputSchema),z.lazy(() => ProgramUncheckedCreateWithoutApplicationsInputSchema) ]),
  where: z.lazy(() => ProgramWhereInputSchema).optional()
}).strict();

export default ProgramUpsertWithoutApplicationsInputSchema;
