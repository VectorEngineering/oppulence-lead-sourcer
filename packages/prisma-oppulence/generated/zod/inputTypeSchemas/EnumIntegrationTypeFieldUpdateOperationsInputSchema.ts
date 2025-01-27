import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntegrationTypeSchema } from './IntegrationTypeSchema';

export const EnumIntegrationTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumIntegrationTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => IntegrationTypeSchema).optional()
}).strict();

export default EnumIntegrationTypeFieldUpdateOperationsInputSchema;
