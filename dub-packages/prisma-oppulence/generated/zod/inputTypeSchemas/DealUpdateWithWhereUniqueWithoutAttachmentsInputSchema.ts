import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema';
import { DealUpdateWithoutAttachmentsInputSchema } from './DealUpdateWithoutAttachmentsInputSchema';
import { DealUncheckedUpdateWithoutAttachmentsInputSchema } from './DealUncheckedUpdateWithoutAttachmentsInputSchema';

export const DealUpdateWithWhereUniqueWithoutAttachmentsInputSchema: z.ZodType<Prisma.DealUpdateWithWhereUniqueWithoutAttachmentsInput> = z.object({
  where: z.lazy(() => DealWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => DealUpdateWithoutAttachmentsInputSchema),z.lazy(() => DealUncheckedUpdateWithoutAttachmentsInputSchema) ]),
}).strict();

export default DealUpdateWithWhereUniqueWithoutAttachmentsInputSchema;
