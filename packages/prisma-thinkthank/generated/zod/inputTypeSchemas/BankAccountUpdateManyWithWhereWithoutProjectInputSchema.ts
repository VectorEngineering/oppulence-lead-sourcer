import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankAccountScalarWhereInputSchema } from './BankAccountScalarWhereInputSchema';
import { BankAccountUpdateManyMutationInputSchema } from './BankAccountUpdateManyMutationInputSchema';
import { BankAccountUncheckedUpdateManyWithoutProjectInputSchema } from './BankAccountUncheckedUpdateManyWithoutProjectInputSchema';

export const BankAccountUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.BankAccountUpdateManyWithWhereWithoutProjectInput> = z.object({
  where: z.lazy(() => BankAccountScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BankAccountUpdateManyMutationInputSchema),z.lazy(() => BankAccountUncheckedUpdateManyWithoutProjectInputSchema) ]),
}).strict();

export default BankAccountUpdateManyWithWhereWithoutProjectInputSchema;
