import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DiscountCreateWithoutProgramEnrollmentsInputSchema } from './DiscountCreateWithoutProgramEnrollmentsInputSchema';
import { DiscountUncheckedCreateWithoutProgramEnrollmentsInputSchema } from './DiscountUncheckedCreateWithoutProgramEnrollmentsInputSchema';
import { DiscountCreateOrConnectWithoutProgramEnrollmentsInputSchema } from './DiscountCreateOrConnectWithoutProgramEnrollmentsInputSchema';
import { DiscountWhereUniqueInputSchema } from './DiscountWhereUniqueInputSchema';

export const DiscountCreateNestedOneWithoutProgramEnrollmentsInputSchema: z.ZodType<Prisma.DiscountCreateNestedOneWithoutProgramEnrollmentsInput> = z.object({
  create: z.union([ z.lazy(() => DiscountCreateWithoutProgramEnrollmentsInputSchema),z.lazy(() => DiscountUncheckedCreateWithoutProgramEnrollmentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DiscountCreateOrConnectWithoutProgramEnrollmentsInputSchema).optional(),
  connect: z.lazy(() => DiscountWhereUniqueInputSchema).optional()
}).strict();

export default DiscountCreateNestedOneWithoutProgramEnrollmentsInputSchema;
