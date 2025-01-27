import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DiscountUpdateWithoutProgramEnrollmentsInputSchema } from './DiscountUpdateWithoutProgramEnrollmentsInputSchema';
import { DiscountUncheckedUpdateWithoutProgramEnrollmentsInputSchema } from './DiscountUncheckedUpdateWithoutProgramEnrollmentsInputSchema';
import { DiscountCreateWithoutProgramEnrollmentsInputSchema } from './DiscountCreateWithoutProgramEnrollmentsInputSchema';
import { DiscountUncheckedCreateWithoutProgramEnrollmentsInputSchema } from './DiscountUncheckedCreateWithoutProgramEnrollmentsInputSchema';
import { DiscountWhereInputSchema } from './DiscountWhereInputSchema';

export const DiscountUpsertWithoutProgramEnrollmentsInputSchema: z.ZodType<Prisma.DiscountUpsertWithoutProgramEnrollmentsInput> = z.object({
  update: z.union([ z.lazy(() => DiscountUpdateWithoutProgramEnrollmentsInputSchema),z.lazy(() => DiscountUncheckedUpdateWithoutProgramEnrollmentsInputSchema) ]),
  create: z.union([ z.lazy(() => DiscountCreateWithoutProgramEnrollmentsInputSchema),z.lazy(() => DiscountUncheckedCreateWithoutProgramEnrollmentsInputSchema) ]),
  where: z.lazy(() => DiscountWhereInputSchema).optional()
}).strict();

export default DiscountUpsertWithoutProgramEnrollmentsInputSchema;
