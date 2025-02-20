import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DiscountWhereUniqueInputSchema } from './DiscountWhereUniqueInputSchema';
import { DiscountCreateWithoutProgramEnrollmentsInputSchema } from './DiscountCreateWithoutProgramEnrollmentsInputSchema';
import { DiscountUncheckedCreateWithoutProgramEnrollmentsInputSchema } from './DiscountUncheckedCreateWithoutProgramEnrollmentsInputSchema';

export const DiscountCreateOrConnectWithoutProgramEnrollmentsInputSchema: z.ZodType<Prisma.DiscountCreateOrConnectWithoutProgramEnrollmentsInput> = z.object({
  where: z.lazy(() => DiscountWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DiscountCreateWithoutProgramEnrollmentsInputSchema),z.lazy(() => DiscountUncheckedCreateWithoutProgramEnrollmentsInputSchema) ]),
}).strict();

export default DiscountCreateOrConnectWithoutProgramEnrollmentsInputSchema;
