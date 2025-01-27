import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const StageRequiredFieldScalarWhereInputSchema: z.ZodType<Prisma.StageRequiredFieldScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => StageRequiredFieldScalarWhereInputSchema),z.lazy(() => StageRequiredFieldScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StageRequiredFieldScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StageRequiredFieldScalarWhereInputSchema),z.lazy(() => StageRequiredFieldScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  stageId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  fieldName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  errorMessage: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default StageRequiredFieldScalarWhereInputSchema;
