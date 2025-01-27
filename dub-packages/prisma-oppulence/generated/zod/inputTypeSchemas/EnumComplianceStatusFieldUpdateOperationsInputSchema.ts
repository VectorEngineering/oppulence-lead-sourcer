import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ComplianceStatusSchema } from './ComplianceStatusSchema';

export const EnumComplianceStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumComplianceStatusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => ComplianceStatusSchema).optional()
}).strict();

export default EnumComplianceStatusFieldUpdateOperationsInputSchema;
