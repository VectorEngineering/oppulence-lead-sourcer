import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramWhereInputSchema } from './ProgramWhereInputSchema';
import { ProgramUpdateWithoutLinksInputSchema } from './ProgramUpdateWithoutLinksInputSchema';
import { ProgramUncheckedUpdateWithoutLinksInputSchema } from './ProgramUncheckedUpdateWithoutLinksInputSchema';

export const ProgramUpdateToOneWithWhereWithoutLinksInputSchema: z.ZodType<Prisma.ProgramUpdateToOneWithWhereWithoutLinksInput> = z.object({
  where: z.lazy(() => ProgramWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProgramUpdateWithoutLinksInputSchema),z.lazy(() => ProgramUncheckedUpdateWithoutLinksInputSchema) ]),
}).strict();

export default ProgramUpdateToOneWithWhereWithoutLinksInputSchema;
