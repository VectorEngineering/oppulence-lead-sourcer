import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadUpdateWithoutPersonalDetailsInputSchema } from './LeadUpdateWithoutPersonalDetailsInputSchema';
import { LeadUncheckedUpdateWithoutPersonalDetailsInputSchema } from './LeadUncheckedUpdateWithoutPersonalDetailsInputSchema';
import { LeadCreateWithoutPersonalDetailsInputSchema } from './LeadCreateWithoutPersonalDetailsInputSchema';
import { LeadUncheckedCreateWithoutPersonalDetailsInputSchema } from './LeadUncheckedCreateWithoutPersonalDetailsInputSchema';
import { LeadWhereInputSchema } from './LeadWhereInputSchema';

export const LeadUpsertWithoutPersonalDetailsInputSchema: z.ZodType<Prisma.LeadUpsertWithoutPersonalDetailsInput> = z.object({
  update: z.union([ z.lazy(() => LeadUpdateWithoutPersonalDetailsInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutPersonalDetailsInputSchema) ]),
  create: z.union([ z.lazy(() => LeadCreateWithoutPersonalDetailsInputSchema),z.lazy(() => LeadUncheckedCreateWithoutPersonalDetailsInputSchema) ]),
  where: z.lazy(() => LeadWhereInputSchema).optional()
}).strict();

export default LeadUpsertWithoutPersonalDetailsInputSchema;
