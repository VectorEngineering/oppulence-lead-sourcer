import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PayoutScalarWhereInputSchema } from './PayoutScalarWhereInputSchema';
import { PayoutUpdateManyMutationInputSchema } from './PayoutUpdateManyMutationInputSchema';
import { PayoutUncheckedUpdateManyWithoutProgramInputSchema } from './PayoutUncheckedUpdateManyWithoutProgramInputSchema';

export const PayoutUpdateManyWithWhereWithoutProgramInputSchema: z.ZodType<Prisma.PayoutUpdateManyWithWhereWithoutProgramInput> = z.object({
  where: z.lazy(() => PayoutScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PayoutUpdateManyMutationInputSchema),z.lazy(() => PayoutUncheckedUpdateManyWithoutProgramInputSchema) ]),
}).strict();

export default PayoutUpdateManyWithWhereWithoutProgramInputSchema;
