import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramUpdateWithoutDiscountsInputSchema } from './ProgramUpdateWithoutDiscountsInputSchema';
import { ProgramUncheckedUpdateWithoutDiscountsInputSchema } from './ProgramUncheckedUpdateWithoutDiscountsInputSchema';
import { ProgramCreateWithoutDiscountsInputSchema } from './ProgramCreateWithoutDiscountsInputSchema';
import { ProgramUncheckedCreateWithoutDiscountsInputSchema } from './ProgramUncheckedCreateWithoutDiscountsInputSchema';
import { ProgramWhereInputSchema } from './ProgramWhereInputSchema';

export const ProgramUpsertWithoutDiscountsInputSchema: z.ZodType<Prisma.ProgramUpsertWithoutDiscountsInput> = z.object({
  update: z.union([ z.lazy(() => ProgramUpdateWithoutDiscountsInputSchema),z.lazy(() => ProgramUncheckedUpdateWithoutDiscountsInputSchema) ]),
  create: z.union([ z.lazy(() => ProgramCreateWithoutDiscountsInputSchema),z.lazy(() => ProgramUncheckedCreateWithoutDiscountsInputSchema) ]),
  where: z.lazy(() => ProgramWhereInputSchema).optional()
}).strict();

export default ProgramUpsertWithoutDiscountsInputSchema;
