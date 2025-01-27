import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramCreateWithoutPayoutsInputSchema } from './ProgramCreateWithoutPayoutsInputSchema';
import { ProgramUncheckedCreateWithoutPayoutsInputSchema } from './ProgramUncheckedCreateWithoutPayoutsInputSchema';
import { ProgramCreateOrConnectWithoutPayoutsInputSchema } from './ProgramCreateOrConnectWithoutPayoutsInputSchema';
import { ProgramUpsertWithoutPayoutsInputSchema } from './ProgramUpsertWithoutPayoutsInputSchema';
import { ProgramWhereUniqueInputSchema } from './ProgramWhereUniqueInputSchema';
import { ProgramUpdateToOneWithWhereWithoutPayoutsInputSchema } from './ProgramUpdateToOneWithWhereWithoutPayoutsInputSchema';
import { ProgramUpdateWithoutPayoutsInputSchema } from './ProgramUpdateWithoutPayoutsInputSchema';
import { ProgramUncheckedUpdateWithoutPayoutsInputSchema } from './ProgramUncheckedUpdateWithoutPayoutsInputSchema';

export const ProgramUpdateOneRequiredWithoutPayoutsNestedInputSchema: z.ZodType<Prisma.ProgramUpdateOneRequiredWithoutPayoutsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProgramCreateWithoutPayoutsInputSchema),z.lazy(() => ProgramUncheckedCreateWithoutPayoutsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProgramCreateOrConnectWithoutPayoutsInputSchema).optional(),
  upsert: z.lazy(() => ProgramUpsertWithoutPayoutsInputSchema).optional(),
  connect: z.lazy(() => ProgramWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProgramUpdateToOneWithWhereWithoutPayoutsInputSchema),z.lazy(() => ProgramUpdateWithoutPayoutsInputSchema),z.lazy(() => ProgramUncheckedUpdateWithoutPayoutsInputSchema) ]).optional(),
}).strict();

export default ProgramUpdateOneRequiredWithoutPayoutsNestedInputSchema;
