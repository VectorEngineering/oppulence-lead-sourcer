import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramWhereInputSchema } from './ProgramWhereInputSchema';
import { ProgramUpdateWithoutSalesInputSchema } from './ProgramUpdateWithoutSalesInputSchema';
import { ProgramUncheckedUpdateWithoutSalesInputSchema } from './ProgramUncheckedUpdateWithoutSalesInputSchema';

export const ProgramUpdateToOneWithWhereWithoutSalesInputSchema: z.ZodType<Prisma.ProgramUpdateToOneWithWhereWithoutSalesInput> = z.object({
  where: z.lazy(() => ProgramWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProgramUpdateWithoutSalesInputSchema),z.lazy(() => ProgramUncheckedUpdateWithoutSalesInputSchema) ]),
}).strict();

export default ProgramUpdateToOneWithWhereWithoutSalesInputSchema;
