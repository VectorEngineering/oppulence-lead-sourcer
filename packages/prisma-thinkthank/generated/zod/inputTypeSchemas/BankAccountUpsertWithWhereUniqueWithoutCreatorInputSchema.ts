import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankAccountWhereUniqueInputSchema } from './BankAccountWhereUniqueInputSchema';
import { BankAccountUpdateWithoutCreatorInputSchema } from './BankAccountUpdateWithoutCreatorInputSchema';
import { BankAccountUncheckedUpdateWithoutCreatorInputSchema } from './BankAccountUncheckedUpdateWithoutCreatorInputSchema';
import { BankAccountCreateWithoutCreatorInputSchema } from './BankAccountCreateWithoutCreatorInputSchema';
import { BankAccountUncheckedCreateWithoutCreatorInputSchema } from './BankAccountUncheckedCreateWithoutCreatorInputSchema';

export const BankAccountUpsertWithWhereUniqueWithoutCreatorInputSchema: z.ZodType<Prisma.BankAccountUpsertWithWhereUniqueWithoutCreatorInput> = z.object({
  where: z.lazy(() => BankAccountWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BankAccountUpdateWithoutCreatorInputSchema),z.lazy(() => BankAccountUncheckedUpdateWithoutCreatorInputSchema) ]),
  create: z.union([ z.lazy(() => BankAccountCreateWithoutCreatorInputSchema),z.lazy(() => BankAccountUncheckedCreateWithoutCreatorInputSchema) ]),
}).strict();

export default BankAccountUpsertWithWhereUniqueWithoutCreatorInputSchema;
