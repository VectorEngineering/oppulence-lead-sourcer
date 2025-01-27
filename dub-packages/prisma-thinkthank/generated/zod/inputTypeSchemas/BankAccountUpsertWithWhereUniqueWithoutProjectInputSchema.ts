import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankAccountWhereUniqueInputSchema } from './BankAccountWhereUniqueInputSchema';
import { BankAccountUpdateWithoutProjectInputSchema } from './BankAccountUpdateWithoutProjectInputSchema';
import { BankAccountUncheckedUpdateWithoutProjectInputSchema } from './BankAccountUncheckedUpdateWithoutProjectInputSchema';
import { BankAccountCreateWithoutProjectInputSchema } from './BankAccountCreateWithoutProjectInputSchema';
import { BankAccountUncheckedCreateWithoutProjectInputSchema } from './BankAccountUncheckedCreateWithoutProjectInputSchema';

export const BankAccountUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.BankAccountUpsertWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => BankAccountWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BankAccountUpdateWithoutProjectInputSchema),z.lazy(() => BankAccountUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => BankAccountCreateWithoutProjectInputSchema),z.lazy(() => BankAccountUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default BankAccountUpsertWithWhereUniqueWithoutProjectInputSchema;
