import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadUpdateWithoutAttachmentsInputSchema } from './LeadUpdateWithoutAttachmentsInputSchema';
import { LeadUncheckedUpdateWithoutAttachmentsInputSchema } from './LeadUncheckedUpdateWithoutAttachmentsInputSchema';
import { LeadCreateWithoutAttachmentsInputSchema } from './LeadCreateWithoutAttachmentsInputSchema';
import { LeadUncheckedCreateWithoutAttachmentsInputSchema } from './LeadUncheckedCreateWithoutAttachmentsInputSchema';

export const LeadUpsertWithWhereUniqueWithoutAttachmentsInputSchema: z.ZodType<Prisma.LeadUpsertWithWhereUniqueWithoutAttachmentsInput> = z.object({
  where: z.lazy(() => LeadWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LeadUpdateWithoutAttachmentsInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutAttachmentsInputSchema) ]),
  create: z.union([ z.lazy(() => LeadCreateWithoutAttachmentsInputSchema),z.lazy(() => LeadUncheckedCreateWithoutAttachmentsInputSchema) ]),
}).strict();

export default LeadUpsertWithWhereUniqueWithoutAttachmentsInputSchema;
