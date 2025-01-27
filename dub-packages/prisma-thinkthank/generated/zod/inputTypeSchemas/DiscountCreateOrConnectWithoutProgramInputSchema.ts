import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DiscountWhereUniqueInputSchema } from './DiscountWhereUniqueInputSchema';
import { DiscountCreateWithoutProgramInputSchema } from './DiscountCreateWithoutProgramInputSchema';
import { DiscountUncheckedCreateWithoutProgramInputSchema } from './DiscountUncheckedCreateWithoutProgramInputSchema';

export const DiscountCreateOrConnectWithoutProgramInputSchema: z.ZodType<Prisma.DiscountCreateOrConnectWithoutProgramInput> = z.object({
  where: z.lazy(() => DiscountWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DiscountCreateWithoutProgramInputSchema),z.lazy(() => DiscountUncheckedCreateWithoutProgramInputSchema) ]),
}).strict();

export default DiscountCreateOrConnectWithoutProgramInputSchema;
