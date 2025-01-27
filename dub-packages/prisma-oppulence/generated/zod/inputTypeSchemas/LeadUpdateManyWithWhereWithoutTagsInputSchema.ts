import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadScalarWhereInputSchema } from './LeadScalarWhereInputSchema';
import { LeadUpdateManyMutationInputSchema } from './LeadUpdateManyMutationInputSchema';
import { LeadUncheckedUpdateManyWithoutTagsInputSchema } from './LeadUncheckedUpdateManyWithoutTagsInputSchema';

export const LeadUpdateManyWithWhereWithoutTagsInputSchema: z.ZodType<Prisma.LeadUpdateManyWithWhereWithoutTagsInput> = z.object({
  where: z.lazy(() => LeadScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LeadUpdateManyMutationInputSchema),z.lazy(() => LeadUncheckedUpdateManyWithoutTagsInputSchema) ]),
}).strict();

export default LeadUpdateManyWithWhereWithoutTagsInputSchema;
