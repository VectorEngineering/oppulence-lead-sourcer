import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PartnerStatusSchema } from './PartnerStatusSchema';

export const EnumPartnerStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumPartnerStatusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => PartnerStatusSchema).optional()
}).strict();

export default EnumPartnerStatusFieldUpdateOperationsInputSchema;
