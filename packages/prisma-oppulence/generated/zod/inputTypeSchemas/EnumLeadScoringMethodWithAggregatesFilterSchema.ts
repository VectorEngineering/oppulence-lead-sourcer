import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadScoringMethodSchema } from './LeadScoringMethodSchema';
import { NestedEnumLeadScoringMethodWithAggregatesFilterSchema } from './NestedEnumLeadScoringMethodWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumLeadScoringMethodFilterSchema } from './NestedEnumLeadScoringMethodFilterSchema';

export const EnumLeadScoringMethodWithAggregatesFilterSchema: z.ZodType<Prisma.EnumLeadScoringMethodWithAggregatesFilter> = z.object({
  equals: z.lazy(() => LeadScoringMethodSchema).optional(),
  in: z.lazy(() => LeadScoringMethodSchema).array().optional(),
  notIn: z.lazy(() => LeadScoringMethodSchema).array().optional(),
  not: z.union([ z.lazy(() => LeadScoringMethodSchema),z.lazy(() => NestedEnumLeadScoringMethodWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumLeadScoringMethodFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumLeadScoringMethodFilterSchema).optional()
}).strict();

export default EnumLeadScoringMethodWithAggregatesFilterSchema;
