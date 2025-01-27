import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankConnectionSettingsWhereInputSchema } from './BankConnectionSettingsWhereInputSchema';

export const BankConnectionSettingsNullableRelationFilterSchema: z.ZodType<Prisma.BankConnectionSettingsNullableRelationFilter> = z.object({
  is: z.lazy(() => BankConnectionSettingsWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => BankConnectionSettingsWhereInputSchema).optional().nullable()
}).strict();

export default BankConnectionSettingsNullableRelationFilterSchema;
