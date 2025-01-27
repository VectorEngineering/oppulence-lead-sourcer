import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankAccountWhereUniqueInputSchema } from './BankAccountWhereUniqueInputSchema';
import { BankAccountUpdateWithoutProjectInputSchema } from './BankAccountUpdateWithoutProjectInputSchema';
import { BankAccountUncheckedUpdateWithoutProjectInputSchema } from './BankAccountUncheckedUpdateWithoutProjectInputSchema';

export const BankAccountUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.BankAccountUpdateWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => BankAccountWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BankAccountUpdateWithoutProjectInputSchema),z.lazy(() => BankAccountUncheckedUpdateWithoutProjectInputSchema) ]),
}).strict();

export default BankAccountUpdateWithWhereUniqueWithoutProjectInputSchema;
