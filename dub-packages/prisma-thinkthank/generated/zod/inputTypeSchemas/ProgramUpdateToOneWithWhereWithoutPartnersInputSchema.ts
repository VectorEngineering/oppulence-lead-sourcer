import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramWhereInputSchema } from './ProgramWhereInputSchema';
import { ProgramUpdateWithoutPartnersInputSchema } from './ProgramUpdateWithoutPartnersInputSchema';
import { ProgramUncheckedUpdateWithoutPartnersInputSchema } from './ProgramUncheckedUpdateWithoutPartnersInputSchema';

export const ProgramUpdateToOneWithWhereWithoutPartnersInputSchema: z.ZodType<Prisma.ProgramUpdateToOneWithWhereWithoutPartnersInput> = z.object({
  where: z.lazy(() => ProgramWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProgramUpdateWithoutPartnersInputSchema),z.lazy(() => ProgramUncheckedUpdateWithoutPartnersInputSchema) ]),
}).strict();

export default ProgramUpdateToOneWithWhereWithoutPartnersInputSchema;
