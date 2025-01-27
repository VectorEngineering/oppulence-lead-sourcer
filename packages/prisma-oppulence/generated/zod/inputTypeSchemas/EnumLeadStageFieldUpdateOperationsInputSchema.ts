import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadStageSchema } from './LeadStageSchema';

export const EnumLeadStageFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumLeadStageFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => LeadStageSchema).optional()
}).strict();

export default EnumLeadStageFieldUpdateOperationsInputSchema;
