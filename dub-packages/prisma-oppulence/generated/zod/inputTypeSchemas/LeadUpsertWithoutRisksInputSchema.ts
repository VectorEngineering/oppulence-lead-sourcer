import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadUpdateWithoutRisksInputSchema } from './LeadUpdateWithoutRisksInputSchema';
import { LeadUncheckedUpdateWithoutRisksInputSchema } from './LeadUncheckedUpdateWithoutRisksInputSchema';
import { LeadCreateWithoutRisksInputSchema } from './LeadCreateWithoutRisksInputSchema';
import { LeadUncheckedCreateWithoutRisksInputSchema } from './LeadUncheckedCreateWithoutRisksInputSchema';
import { LeadWhereInputSchema } from './LeadWhereInputSchema';

export const LeadUpsertWithoutRisksInputSchema: z.ZodType<Prisma.LeadUpsertWithoutRisksInput> = z.object({
  update: z.union([ z.lazy(() => LeadUpdateWithoutRisksInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutRisksInputSchema) ]),
  create: z.union([ z.lazy(() => LeadCreateWithoutRisksInputSchema),z.lazy(() => LeadUncheckedCreateWithoutRisksInputSchema) ]),
  where: z.lazy(() => LeadWhereInputSchema).optional()
}).strict();

export default LeadUpsertWithoutRisksInputSchema;
