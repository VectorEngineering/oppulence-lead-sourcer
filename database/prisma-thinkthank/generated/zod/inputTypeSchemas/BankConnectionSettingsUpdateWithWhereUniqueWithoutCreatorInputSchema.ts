import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankConnectionSettingsWhereUniqueInputSchema } from './BankConnectionSettingsWhereUniqueInputSchema';
import { BankConnectionSettingsUpdateWithoutCreatorInputSchema } from './BankConnectionSettingsUpdateWithoutCreatorInputSchema';
import { BankConnectionSettingsUncheckedUpdateWithoutCreatorInputSchema } from './BankConnectionSettingsUncheckedUpdateWithoutCreatorInputSchema';

export const BankConnectionSettingsUpdateWithWhereUniqueWithoutCreatorInputSchema: z.ZodType<Prisma.BankConnectionSettingsUpdateWithWhereUniqueWithoutCreatorInput> = z.object({
  where: z.lazy(() => BankConnectionSettingsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BankConnectionSettingsUpdateWithoutCreatorInputSchema),z.lazy(() => BankConnectionSettingsUncheckedUpdateWithoutCreatorInputSchema) ]),
}).strict();

export default BankConnectionSettingsUpdateWithWhereUniqueWithoutCreatorInputSchema;
