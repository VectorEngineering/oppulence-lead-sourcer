import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramUpdateWithoutSalesInputSchema } from './ProgramUpdateWithoutSalesInputSchema';
import { ProgramUncheckedUpdateWithoutSalesInputSchema } from './ProgramUncheckedUpdateWithoutSalesInputSchema';
import { ProgramCreateWithoutSalesInputSchema } from './ProgramCreateWithoutSalesInputSchema';
import { ProgramUncheckedCreateWithoutSalesInputSchema } from './ProgramUncheckedCreateWithoutSalesInputSchema';
import { ProgramWhereInputSchema } from './ProgramWhereInputSchema';

export const ProgramUpsertWithoutSalesInputSchema: z.ZodType<Prisma.ProgramUpsertWithoutSalesInput> = z.object({
  update: z.union([ z.lazy(() => ProgramUpdateWithoutSalesInputSchema),z.lazy(() => ProgramUncheckedUpdateWithoutSalesInputSchema) ]),
  create: z.union([ z.lazy(() => ProgramCreateWithoutSalesInputSchema),z.lazy(() => ProgramUncheckedCreateWithoutSalesInputSchema) ]),
  where: z.lazy(() => ProgramWhereInputSchema).optional()
}).strict();

export default ProgramUpsertWithoutSalesInputSchema;
