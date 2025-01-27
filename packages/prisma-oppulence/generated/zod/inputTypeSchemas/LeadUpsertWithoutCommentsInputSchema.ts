import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadUpdateWithoutCommentsInputSchema } from './LeadUpdateWithoutCommentsInputSchema';
import { LeadUncheckedUpdateWithoutCommentsInputSchema } from './LeadUncheckedUpdateWithoutCommentsInputSchema';
import { LeadCreateWithoutCommentsInputSchema } from './LeadCreateWithoutCommentsInputSchema';
import { LeadUncheckedCreateWithoutCommentsInputSchema } from './LeadUncheckedCreateWithoutCommentsInputSchema';
import { LeadWhereInputSchema } from './LeadWhereInputSchema';

export const LeadUpsertWithoutCommentsInputSchema: z.ZodType<Prisma.LeadUpsertWithoutCommentsInput> = z.object({
  update: z.union([ z.lazy(() => LeadUpdateWithoutCommentsInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutCommentsInputSchema) ]),
  create: z.union([ z.lazy(() => LeadCreateWithoutCommentsInputSchema),z.lazy(() => LeadUncheckedCreateWithoutCommentsInputSchema) ]),
  where: z.lazy(() => LeadWhereInputSchema).optional()
}).strict();

export default LeadUpsertWithoutCommentsInputSchema;
