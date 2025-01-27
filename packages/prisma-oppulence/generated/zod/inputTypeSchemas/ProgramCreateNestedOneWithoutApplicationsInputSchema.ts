import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramCreateWithoutApplicationsInputSchema } from './ProgramCreateWithoutApplicationsInputSchema';
import { ProgramUncheckedCreateWithoutApplicationsInputSchema } from './ProgramUncheckedCreateWithoutApplicationsInputSchema';
import { ProgramCreateOrConnectWithoutApplicationsInputSchema } from './ProgramCreateOrConnectWithoutApplicationsInputSchema';
import { ProgramWhereUniqueInputSchema } from './ProgramWhereUniqueInputSchema';

export const ProgramCreateNestedOneWithoutApplicationsInputSchema: z.ZodType<Prisma.ProgramCreateNestedOneWithoutApplicationsInput> = z.object({
  create: z.union([ z.lazy(() => ProgramCreateWithoutApplicationsInputSchema),z.lazy(() => ProgramUncheckedCreateWithoutApplicationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProgramCreateOrConnectWithoutApplicationsInputSchema).optional(),
  connect: z.lazy(() => ProgramWhereUniqueInputSchema).optional()
}).strict();

export default ProgramCreateNestedOneWithoutApplicationsInputSchema;
