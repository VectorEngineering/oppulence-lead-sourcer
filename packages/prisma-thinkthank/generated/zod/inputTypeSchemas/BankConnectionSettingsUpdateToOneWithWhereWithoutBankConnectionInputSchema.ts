import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankConnectionSettingsWhereInputSchema } from './BankConnectionSettingsWhereInputSchema';
import { BankConnectionSettingsUpdateWithoutBankConnectionInputSchema } from './BankConnectionSettingsUpdateWithoutBankConnectionInputSchema';
import { BankConnectionSettingsUncheckedUpdateWithoutBankConnectionInputSchema } from './BankConnectionSettingsUncheckedUpdateWithoutBankConnectionInputSchema';

export const BankConnectionSettingsUpdateToOneWithWhereWithoutBankConnectionInputSchema: z.ZodType<Prisma.BankConnectionSettingsUpdateToOneWithWhereWithoutBankConnectionInput> = z.object({
  where: z.lazy(() => BankConnectionSettingsWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BankConnectionSettingsUpdateWithoutBankConnectionInputSchema),z.lazy(() => BankConnectionSettingsUncheckedUpdateWithoutBankConnectionInputSchema) ]),
}).strict();

export default BankConnectionSettingsUpdateToOneWithWhereWithoutBankConnectionInputSchema;
