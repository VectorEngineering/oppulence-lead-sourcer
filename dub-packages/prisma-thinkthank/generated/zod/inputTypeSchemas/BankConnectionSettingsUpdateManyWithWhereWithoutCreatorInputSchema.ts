import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankConnectionSettingsScalarWhereInputSchema } from './BankConnectionSettingsScalarWhereInputSchema';
import { BankConnectionSettingsUpdateManyMutationInputSchema } from './BankConnectionSettingsUpdateManyMutationInputSchema';
import { BankConnectionSettingsUncheckedUpdateManyWithoutCreatorInputSchema } from './BankConnectionSettingsUncheckedUpdateManyWithoutCreatorInputSchema';

export const BankConnectionSettingsUpdateManyWithWhereWithoutCreatorInputSchema: z.ZodType<Prisma.BankConnectionSettingsUpdateManyWithWhereWithoutCreatorInput> = z.object({
  where: z.lazy(() => BankConnectionSettingsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BankConnectionSettingsUpdateManyMutationInputSchema),z.lazy(() => BankConnectionSettingsUncheckedUpdateManyWithoutCreatorInputSchema) ]),
}).strict();

export default BankConnectionSettingsUpdateManyWithWhereWithoutCreatorInputSchema;
