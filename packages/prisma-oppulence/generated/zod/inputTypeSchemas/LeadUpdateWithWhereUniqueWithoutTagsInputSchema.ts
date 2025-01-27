import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadUpdateWithoutTagsInputSchema } from './LeadUpdateWithoutTagsInputSchema';
import { LeadUncheckedUpdateWithoutTagsInputSchema } from './LeadUncheckedUpdateWithoutTagsInputSchema';

export const LeadUpdateWithWhereUniqueWithoutTagsInputSchema: z.ZodType<Prisma.LeadUpdateWithWhereUniqueWithoutTagsInput> = z.object({
  where: z.lazy(() => LeadWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LeadUpdateWithoutTagsInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutTagsInputSchema) ]),
}).strict();

export default LeadUpdateWithWhereUniqueWithoutTagsInputSchema;
