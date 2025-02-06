import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankAccountWhereUniqueInputSchema } from './BankAccountWhereUniqueInputSchema';
import { BankAccountUpdateWithoutTagsInputSchema } from './BankAccountUpdateWithoutTagsInputSchema';
import { BankAccountUncheckedUpdateWithoutTagsInputSchema } from './BankAccountUncheckedUpdateWithoutTagsInputSchema';
import { BankAccountCreateWithoutTagsInputSchema } from './BankAccountCreateWithoutTagsInputSchema';
import { BankAccountUncheckedCreateWithoutTagsInputSchema } from './BankAccountUncheckedCreateWithoutTagsInputSchema';

export const BankAccountUpsertWithWhereUniqueWithoutTagsInputSchema: z.ZodType<Prisma.BankAccountUpsertWithWhereUniqueWithoutTagsInput> = z.object({
  where: z.lazy(() => BankAccountWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BankAccountUpdateWithoutTagsInputSchema),z.lazy(() => BankAccountUncheckedUpdateWithoutTagsInputSchema) ]),
  create: z.union([ z.lazy(() => BankAccountCreateWithoutTagsInputSchema),z.lazy(() => BankAccountUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();

export default BankAccountUpsertWithWhereUniqueWithoutTagsInputSchema;
