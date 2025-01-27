import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankAccountScalarWhereInputSchema } from './BankAccountScalarWhereInputSchema';
import { BankAccountUpdateManyMutationInputSchema } from './BankAccountUpdateManyMutationInputSchema';
import { BankAccountUncheckedUpdateManyWithoutTagsInputSchema } from './BankAccountUncheckedUpdateManyWithoutTagsInputSchema';

export const BankAccountUpdateManyWithWhereWithoutTagsInputSchema: z.ZodType<Prisma.BankAccountUpdateManyWithWhereWithoutTagsInput> = z.object({
  where: z.lazy(() => BankAccountScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BankAccountUpdateManyMutationInputSchema),z.lazy(() => BankAccountUncheckedUpdateManyWithoutTagsInputSchema) ]),
}).strict();

export default BankAccountUpdateManyWithWhereWithoutTagsInputSchema;
