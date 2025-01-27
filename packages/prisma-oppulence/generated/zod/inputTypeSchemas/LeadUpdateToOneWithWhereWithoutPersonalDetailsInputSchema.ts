import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadWhereInputSchema } from './LeadWhereInputSchema';
import { LeadUpdateWithoutPersonalDetailsInputSchema } from './LeadUpdateWithoutPersonalDetailsInputSchema';
import { LeadUncheckedUpdateWithoutPersonalDetailsInputSchema } from './LeadUncheckedUpdateWithoutPersonalDetailsInputSchema';

export const LeadUpdateToOneWithWhereWithoutPersonalDetailsInputSchema: z.ZodType<Prisma.LeadUpdateToOneWithWhereWithoutPersonalDetailsInput> = z.object({
  where: z.lazy(() => LeadWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LeadUpdateWithoutPersonalDetailsInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutPersonalDetailsInputSchema) ]),
}).strict();

export default LeadUpdateToOneWithWhereWithoutPersonalDetailsInputSchema;
