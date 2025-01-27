import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadUpdateWithoutDealsInputSchema } from './LeadUpdateWithoutDealsInputSchema';
import { LeadUncheckedUpdateWithoutDealsInputSchema } from './LeadUncheckedUpdateWithoutDealsInputSchema';
import { LeadCreateWithoutDealsInputSchema } from './LeadCreateWithoutDealsInputSchema';
import { LeadUncheckedCreateWithoutDealsInputSchema } from './LeadUncheckedCreateWithoutDealsInputSchema';
import { LeadWhereInputSchema } from './LeadWhereInputSchema';

export const LeadUpsertWithoutDealsInputSchema: z.ZodType<Prisma.LeadUpsertWithoutDealsInput> = z.object({
  update: z.union([ z.lazy(() => LeadUpdateWithoutDealsInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutDealsInputSchema) ]),
  create: z.union([ z.lazy(() => LeadCreateWithoutDealsInputSchema),z.lazy(() => LeadUncheckedCreateWithoutDealsInputSchema) ]),
  where: z.lazy(() => LeadWhereInputSchema).optional()
}).strict();

export default LeadUpsertWithoutDealsInputSchema;
