import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadPrioritySchema } from './LeadPrioritySchema';

export const EnumLeadPriorityFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumLeadPriorityFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => LeadPrioritySchema).optional()
}).strict();

export default EnumLeadPriorityFieldUpdateOperationsInputSchema;
