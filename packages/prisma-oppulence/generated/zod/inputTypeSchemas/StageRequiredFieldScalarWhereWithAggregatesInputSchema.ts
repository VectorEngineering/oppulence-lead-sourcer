import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const StageRequiredFieldScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.StageRequiredFieldScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => StageRequiredFieldScalarWhereWithAggregatesInputSchema),z.lazy(() => StageRequiredFieldScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => StageRequiredFieldScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StageRequiredFieldScalarWhereWithAggregatesInputSchema),z.lazy(() => StageRequiredFieldScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  stageId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  fieldName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  errorMessage: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default StageRequiredFieldScalarWhereWithAggregatesInputSchema;
