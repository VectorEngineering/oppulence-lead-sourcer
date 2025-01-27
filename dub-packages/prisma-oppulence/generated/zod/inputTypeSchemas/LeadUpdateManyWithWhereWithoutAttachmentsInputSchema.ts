import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadScalarWhereInputSchema } from './LeadScalarWhereInputSchema';
import { LeadUpdateManyMutationInputSchema } from './LeadUpdateManyMutationInputSchema';
import { LeadUncheckedUpdateManyWithoutAttachmentsInputSchema } from './LeadUncheckedUpdateManyWithoutAttachmentsInputSchema';

export const LeadUpdateManyWithWhereWithoutAttachmentsInputSchema: z.ZodType<Prisma.LeadUpdateManyWithWhereWithoutAttachmentsInput> = z.object({
  where: z.lazy(() => LeadScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LeadUpdateManyMutationInputSchema),z.lazy(() => LeadUncheckedUpdateManyWithoutAttachmentsInputSchema) ]),
}).strict();

export default LeadUpdateManyWithWhereWithoutAttachmentsInputSchema;
