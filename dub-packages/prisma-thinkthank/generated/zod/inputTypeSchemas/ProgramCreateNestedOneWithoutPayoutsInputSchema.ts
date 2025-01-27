import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramCreateWithoutPayoutsInputSchema } from './ProgramCreateWithoutPayoutsInputSchema';
import { ProgramUncheckedCreateWithoutPayoutsInputSchema } from './ProgramUncheckedCreateWithoutPayoutsInputSchema';
import { ProgramCreateOrConnectWithoutPayoutsInputSchema } from './ProgramCreateOrConnectWithoutPayoutsInputSchema';
import { ProgramWhereUniqueInputSchema } from './ProgramWhereUniqueInputSchema';

export const ProgramCreateNestedOneWithoutPayoutsInputSchema: z.ZodType<Prisma.ProgramCreateNestedOneWithoutPayoutsInput> = z.object({
  create: z.union([ z.lazy(() => ProgramCreateWithoutPayoutsInputSchema),z.lazy(() => ProgramUncheckedCreateWithoutPayoutsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProgramCreateOrConnectWithoutPayoutsInputSchema).optional(),
  connect: z.lazy(() => ProgramWhereUniqueInputSchema).optional()
}).strict();

export default ProgramCreateNestedOneWithoutPayoutsInputSchema;
