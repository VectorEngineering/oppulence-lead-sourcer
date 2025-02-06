import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankConnectionWhereUniqueInputSchema } from './BankConnectionWhereUniqueInputSchema';
import { BankConnectionCreateWithoutProjectInputSchema } from './BankConnectionCreateWithoutProjectInputSchema';
import { BankConnectionUncheckedCreateWithoutProjectInputSchema } from './BankConnectionUncheckedCreateWithoutProjectInputSchema';

export const BankConnectionCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.BankConnectionCreateOrConnectWithoutProjectInput> = z.object({
  where: z.lazy(() => BankConnectionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BankConnectionCreateWithoutProjectInputSchema),z.lazy(() => BankConnectionUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default BankConnectionCreateOrConnectWithoutProjectInputSchema;
