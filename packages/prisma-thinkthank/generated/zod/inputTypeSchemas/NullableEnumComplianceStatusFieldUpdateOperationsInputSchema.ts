import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ComplianceStatusSchema } from './ComplianceStatusSchema';

export const NullableEnumComplianceStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumComplianceStatusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => ComplianceStatusSchema).optional().nullable()
}).strict();

export default NullableEnumComplianceStatusFieldUpdateOperationsInputSchema;
