import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PayoutWhereUniqueInputSchema } from './PayoutWhereUniqueInputSchema';
import { PayoutUpdateWithoutProgramInputSchema } from './PayoutUpdateWithoutProgramInputSchema';
import { PayoutUncheckedUpdateWithoutProgramInputSchema } from './PayoutUncheckedUpdateWithoutProgramInputSchema';

export const PayoutUpdateWithWhereUniqueWithoutProgramInputSchema: z.ZodType<Prisma.PayoutUpdateWithWhereUniqueWithoutProgramInput> = z.object({
  where: z.lazy(() => PayoutWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PayoutUpdateWithoutProgramInputSchema),z.lazy(() => PayoutUncheckedUpdateWithoutProgramInputSchema) ]),
}).strict();

export default PayoutUpdateWithWhereUniqueWithoutProgramInputSchema;
