import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramWhereInputSchema } from './ProgramWhereInputSchema';
import { ProgramUpdateWithoutInvoicesInputSchema } from './ProgramUpdateWithoutInvoicesInputSchema';
import { ProgramUncheckedUpdateWithoutInvoicesInputSchema } from './ProgramUncheckedUpdateWithoutInvoicesInputSchema';

export const ProgramUpdateToOneWithWhereWithoutInvoicesInputSchema: z.ZodType<Prisma.ProgramUpdateToOneWithWhereWithoutInvoicesInput> = z.object({
  where: z.lazy(() => ProgramWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProgramUpdateWithoutInvoicesInputSchema),z.lazy(() => ProgramUncheckedUpdateWithoutInvoicesInputSchema) ]),
}).strict();

export default ProgramUpdateToOneWithWhereWithoutInvoicesInputSchema;
