import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankAccountScalarWhereInputSchema } from './BankAccountScalarWhereInputSchema';
import { BankAccountUpdateManyMutationInputSchema } from './BankAccountUpdateManyMutationInputSchema';
import { BankAccountUncheckedUpdateManyWithoutCreatorInputSchema } from './BankAccountUncheckedUpdateManyWithoutCreatorInputSchema';

export const BankAccountUpdateManyWithWhereWithoutCreatorInputSchema: z.ZodType<Prisma.BankAccountUpdateManyWithWhereWithoutCreatorInput> = z.object({
  where: z.lazy(() => BankAccountScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BankAccountUpdateManyMutationInputSchema),z.lazy(() => BankAccountUncheckedUpdateManyWithoutCreatorInputSchema) ]),
}).strict();

export default BankAccountUpdateManyWithWhereWithoutCreatorInputSchema;
