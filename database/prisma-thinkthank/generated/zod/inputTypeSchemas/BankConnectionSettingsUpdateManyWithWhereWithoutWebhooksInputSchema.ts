import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankConnectionSettingsScalarWhereInputSchema } from './BankConnectionSettingsScalarWhereInputSchema';
import { BankConnectionSettingsUpdateManyMutationInputSchema } from './BankConnectionSettingsUpdateManyMutationInputSchema';
import { BankConnectionSettingsUncheckedUpdateManyWithoutWebhooksInputSchema } from './BankConnectionSettingsUncheckedUpdateManyWithoutWebhooksInputSchema';

export const BankConnectionSettingsUpdateManyWithWhereWithoutWebhooksInputSchema: z.ZodType<Prisma.BankConnectionSettingsUpdateManyWithWhereWithoutWebhooksInput> = z.object({
  where: z.lazy(() => BankConnectionSettingsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BankConnectionSettingsUpdateManyMutationInputSchema),z.lazy(() => BankConnectionSettingsUncheckedUpdateManyWithoutWebhooksInputSchema) ]),
}).strict();

export default BankConnectionSettingsUpdateManyWithWhereWithoutWebhooksInputSchema;
