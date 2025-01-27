import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const StageRequiredFieldStageIdFieldNameCompoundUniqueInputSchema: z.ZodType<Prisma.StageRequiredFieldStageIdFieldNameCompoundUniqueInput> = z.object({
  stageId: z.string(),
  fieldName: z.string()
}).strict();

export default StageRequiredFieldStageIdFieldNameCompoundUniqueInputSchema;
