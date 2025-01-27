import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxLabelWhereInputSchema } from './InboxLabelWhereInputSchema';

export const InboxLabelListRelationFilterSchema: z.ZodType<Prisma.InboxLabelListRelationFilter> = z.object({
  every: z.lazy(() => InboxLabelWhereInputSchema).optional(),
  some: z.lazy(() => InboxLabelWhereInputSchema).optional(),
  none: z.lazy(() => InboxLabelWhereInputSchema).optional()
}).strict();

export default InboxLabelListRelationFilterSchema;
