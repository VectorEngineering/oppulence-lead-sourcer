import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadSourceSchema } from './LeadSourceSchema';

export const EnumLeadSourceFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumLeadSourceFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => LeadSourceSchema).optional()
}).strict();

export default EnumLeadSourceFieldUpdateOperationsInputSchema;
