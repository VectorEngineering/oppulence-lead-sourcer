import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealScalarWhereInputSchema } from './DealScalarWhereInputSchema';
import { DealUpdateManyMutationInputSchema } from './DealUpdateManyMutationInputSchema';
import { DealUncheckedUpdateManyWithoutAttachmentsInputSchema } from './DealUncheckedUpdateManyWithoutAttachmentsInputSchema';

export const DealUpdateManyWithWhereWithoutAttachmentsInputSchema: z.ZodType<Prisma.DealUpdateManyWithWhereWithoutAttachmentsInput> = z.object({
  where: z.lazy(() => DealScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DealUpdateManyMutationInputSchema),z.lazy(() => DealUncheckedUpdateManyWithoutAttachmentsInputSchema) ]),
}).strict();

export default DealUpdateManyWithWhereWithoutAttachmentsInputSchema;
