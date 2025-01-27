import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';

export const LeadTouchpointScalarWhereInputSchema: z.ZodType<Prisma.LeadTouchpointScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LeadTouchpointScalarWhereInputSchema),z.lazy(() => LeadTouchpointScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadTouchpointScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadTouchpointScalarWhereInputSchema),z.lazy(() => LeadTouchpointScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  leadId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  channel: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  campaign: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  content: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  interaction: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  timestamp: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  isFirstTouch: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  isLastTouch: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
}).strict();

export default LeadTouchpointScalarWhereInputSchema;
