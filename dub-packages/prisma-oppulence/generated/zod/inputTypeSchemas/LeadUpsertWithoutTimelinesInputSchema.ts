import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadUpdateWithoutTimelinesInputSchema } from './LeadUpdateWithoutTimelinesInputSchema';
import { LeadUncheckedUpdateWithoutTimelinesInputSchema } from './LeadUncheckedUpdateWithoutTimelinesInputSchema';
import { LeadCreateWithoutTimelinesInputSchema } from './LeadCreateWithoutTimelinesInputSchema';
import { LeadUncheckedCreateWithoutTimelinesInputSchema } from './LeadUncheckedCreateWithoutTimelinesInputSchema';
import { LeadWhereInputSchema } from './LeadWhereInputSchema';

export const LeadUpsertWithoutTimelinesInputSchema: z.ZodType<Prisma.LeadUpsertWithoutTimelinesInput> = z.object({
  update: z.union([ z.lazy(() => LeadUpdateWithoutTimelinesInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutTimelinesInputSchema) ]),
  create: z.union([ z.lazy(() => LeadCreateWithoutTimelinesInputSchema),z.lazy(() => LeadUncheckedCreateWithoutTimelinesInputSchema) ]),
  where: z.lazy(() => LeadWhereInputSchema).optional()
}).strict();

export default LeadUpsertWithoutTimelinesInputSchema;
