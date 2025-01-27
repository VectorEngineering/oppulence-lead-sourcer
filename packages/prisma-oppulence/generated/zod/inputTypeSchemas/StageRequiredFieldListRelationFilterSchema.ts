import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StageRequiredFieldWhereInputSchema } from './StageRequiredFieldWhereInputSchema';

export const StageRequiredFieldListRelationFilterSchema: z.ZodType<Prisma.StageRequiredFieldListRelationFilter> = z.object({
  every: z.lazy(() => StageRequiredFieldWhereInputSchema).optional(),
  some: z.lazy(() => StageRequiredFieldWhereInputSchema).optional(),
  none: z.lazy(() => StageRequiredFieldWhereInputSchema).optional()
}).strict();

export default StageRequiredFieldListRelationFilterSchema;
