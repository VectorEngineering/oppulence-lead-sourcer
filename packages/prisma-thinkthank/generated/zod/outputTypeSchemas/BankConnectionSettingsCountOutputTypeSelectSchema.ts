import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const BankConnectionSettingsCountOutputTypeSelectSchema: z.ZodType<Prisma.BankConnectionSettingsCountOutputTypeSelect> = z.object({
  webhooks: z.boolean().optional(),
}).strict();

export default BankConnectionSettingsCountOutputTypeSelectSchema;
