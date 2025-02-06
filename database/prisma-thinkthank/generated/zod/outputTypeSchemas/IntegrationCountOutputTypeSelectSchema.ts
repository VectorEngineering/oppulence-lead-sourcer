import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const IntegrationCountOutputTypeSelectSchema: z.ZodType<Prisma.IntegrationCountOutputTypeSelect> = z.object({
  installations: z.boolean().optional(),
}).strict();

export default IntegrationCountOutputTypeSelectSchema;
