import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StageRequiredFieldSelectSchema } from '../inputTypeSchemas/StageRequiredFieldSelectSchema';
import { StageRequiredFieldIncludeSchema } from '../inputTypeSchemas/StageRequiredFieldIncludeSchema';

export const StageRequiredFieldArgsSchema: z.ZodType<Prisma.StageRequiredFieldDefaultArgs> = z.object({
  select: z.lazy(() => StageRequiredFieldSelectSchema).optional(),
  include: z.lazy(() => StageRequiredFieldIncludeSchema).optional(),
}).strict();

export default StageRequiredFieldArgsSchema;
