import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const StageRequiredFieldCreateWithoutStageInputSchema: z.ZodType<Prisma.StageRequiredFieldCreateWithoutStageInput> = z.object({
  id: z.string().cuid().optional(),
  fieldName: z.string(),
  errorMessage: z.string().optional().nullable()
}).strict();

export default StageRequiredFieldCreateWithoutStageInputSchema;
