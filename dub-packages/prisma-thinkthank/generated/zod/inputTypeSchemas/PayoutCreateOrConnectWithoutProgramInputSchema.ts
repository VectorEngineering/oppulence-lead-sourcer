import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PayoutWhereUniqueInputSchema } from './PayoutWhereUniqueInputSchema';
import { PayoutCreateWithoutProgramInputSchema } from './PayoutCreateWithoutProgramInputSchema';
import { PayoutUncheckedCreateWithoutProgramInputSchema } from './PayoutUncheckedCreateWithoutProgramInputSchema';

export const PayoutCreateOrConnectWithoutProgramInputSchema: z.ZodType<Prisma.PayoutCreateOrConnectWithoutProgramInput> = z.object({
  where: z.lazy(() => PayoutWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PayoutCreateWithoutProgramInputSchema),z.lazy(() => PayoutUncheckedCreateWithoutProgramInputSchema) ]),
}).strict();

export default PayoutCreateOrConnectWithoutProgramInputSchema;
