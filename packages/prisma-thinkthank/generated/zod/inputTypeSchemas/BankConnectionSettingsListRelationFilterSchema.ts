import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankConnectionSettingsWhereInputSchema } from './BankConnectionSettingsWhereInputSchema';

export const BankConnectionSettingsListRelationFilterSchema: z.ZodType<Prisma.BankConnectionSettingsListRelationFilter> = z.object({
  every: z.lazy(() => BankConnectionSettingsWhereInputSchema).optional(),
  some: z.lazy(() => BankConnectionSettingsWhereInputSchema).optional(),
  none: z.lazy(() => BankConnectionSettingsWhereInputSchema).optional()
}).strict();

export default BankConnectionSettingsListRelationFilterSchema;
