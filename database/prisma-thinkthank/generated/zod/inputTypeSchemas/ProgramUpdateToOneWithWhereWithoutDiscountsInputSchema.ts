import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramWhereInputSchema } from './ProgramWhereInputSchema';
import { ProgramUpdateWithoutDiscountsInputSchema } from './ProgramUpdateWithoutDiscountsInputSchema';
import { ProgramUncheckedUpdateWithoutDiscountsInputSchema } from './ProgramUncheckedUpdateWithoutDiscountsInputSchema';

export const ProgramUpdateToOneWithWhereWithoutDiscountsInputSchema: z.ZodType<Prisma.ProgramUpdateToOneWithWhereWithoutDiscountsInput> = z.object({
  where: z.lazy(() => ProgramWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProgramUpdateWithoutDiscountsInputSchema),z.lazy(() => ProgramUncheckedUpdateWithoutDiscountsInputSchema) ]),
}).strict();

export default ProgramUpdateToOneWithWhereWithoutDiscountsInputSchema;
