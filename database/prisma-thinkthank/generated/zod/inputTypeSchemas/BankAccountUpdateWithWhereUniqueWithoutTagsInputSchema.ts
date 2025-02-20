import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankAccountWhereUniqueInputSchema } from './BankAccountWhereUniqueInputSchema';
import { BankAccountUpdateWithoutTagsInputSchema } from './BankAccountUpdateWithoutTagsInputSchema';
import { BankAccountUncheckedUpdateWithoutTagsInputSchema } from './BankAccountUncheckedUpdateWithoutTagsInputSchema';

export const BankAccountUpdateWithWhereUniqueWithoutTagsInputSchema: z.ZodType<Prisma.BankAccountUpdateWithWhereUniqueWithoutTagsInput> = z.object({
  where: z.lazy(() => BankAccountWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BankAccountUpdateWithoutTagsInputSchema),z.lazy(() => BankAccountUncheckedUpdateWithoutTagsInputSchema) ]),
}).strict();

export default BankAccountUpdateWithWhereUniqueWithoutTagsInputSchema;
