import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadUpdateWithoutAttachmentsInputSchema } from './LeadUpdateWithoutAttachmentsInputSchema';
import { LeadUncheckedUpdateWithoutAttachmentsInputSchema } from './LeadUncheckedUpdateWithoutAttachmentsInputSchema';

export const LeadUpdateWithWhereUniqueWithoutAttachmentsInputSchema: z.ZodType<Prisma.LeadUpdateWithWhereUniqueWithoutAttachmentsInput> = z.object({
  where: z.lazy(() => LeadWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LeadUpdateWithoutAttachmentsInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutAttachmentsInputSchema) ]),
}).strict();

export default LeadUpdateWithWhereUniqueWithoutAttachmentsInputSchema;
