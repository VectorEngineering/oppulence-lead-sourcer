import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxWhereInputSchema } from './InboxWhereInputSchema';
import { InboxUpdateWithoutActivitiesInputSchema } from './InboxUpdateWithoutActivitiesInputSchema';
import { InboxUncheckedUpdateWithoutActivitiesInputSchema } from './InboxUncheckedUpdateWithoutActivitiesInputSchema';

export const InboxUpdateToOneWithWhereWithoutActivitiesInputSchema: z.ZodType<Prisma.InboxUpdateToOneWithWhereWithoutActivitiesInput> = z.object({
  where: z.lazy(() => InboxWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => InboxUpdateWithoutActivitiesInputSchema),z.lazy(() => InboxUncheckedUpdateWithoutActivitiesInputSchema) ]),
}).strict();

export default InboxUpdateToOneWithWhereWithoutActivitiesInputSchema;
