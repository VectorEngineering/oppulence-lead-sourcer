import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramCreateWithoutDiscountsInputSchema } from './ProgramCreateWithoutDiscountsInputSchema';
import { ProgramUncheckedCreateWithoutDiscountsInputSchema } from './ProgramUncheckedCreateWithoutDiscountsInputSchema';
import { ProgramCreateOrConnectWithoutDiscountsInputSchema } from './ProgramCreateOrConnectWithoutDiscountsInputSchema';
import { ProgramUpsertWithoutDiscountsInputSchema } from './ProgramUpsertWithoutDiscountsInputSchema';
import { ProgramWhereUniqueInputSchema } from './ProgramWhereUniqueInputSchema';
import { ProgramUpdateToOneWithWhereWithoutDiscountsInputSchema } from './ProgramUpdateToOneWithWhereWithoutDiscountsInputSchema';
import { ProgramUpdateWithoutDiscountsInputSchema } from './ProgramUpdateWithoutDiscountsInputSchema';
import { ProgramUncheckedUpdateWithoutDiscountsInputSchema } from './ProgramUncheckedUpdateWithoutDiscountsInputSchema';

export const ProgramUpdateOneRequiredWithoutDiscountsNestedInputSchema: z.ZodType<Prisma.ProgramUpdateOneRequiredWithoutDiscountsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProgramCreateWithoutDiscountsInputSchema),z.lazy(() => ProgramUncheckedCreateWithoutDiscountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProgramCreateOrConnectWithoutDiscountsInputSchema).optional(),
  upsert: z.lazy(() => ProgramUpsertWithoutDiscountsInputSchema).optional(),
  connect: z.lazy(() => ProgramWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProgramUpdateToOneWithWhereWithoutDiscountsInputSchema),z.lazy(() => ProgramUpdateWithoutDiscountsInputSchema),z.lazy(() => ProgramUncheckedUpdateWithoutDiscountsInputSchema) ]).optional(),
}).strict();

export default ProgramUpdateOneRequiredWithoutDiscountsNestedInputSchema;
