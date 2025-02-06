import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DiscountWhereInputSchema } from './DiscountWhereInputSchema';
import { DiscountUpdateWithoutProgramEnrollmentsInputSchema } from './DiscountUpdateWithoutProgramEnrollmentsInputSchema';
import { DiscountUncheckedUpdateWithoutProgramEnrollmentsInputSchema } from './DiscountUncheckedUpdateWithoutProgramEnrollmentsInputSchema';

export const DiscountUpdateToOneWithWhereWithoutProgramEnrollmentsInputSchema: z.ZodType<Prisma.DiscountUpdateToOneWithWhereWithoutProgramEnrollmentsInput> = z.object({
  where: z.lazy(() => DiscountWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DiscountUpdateWithoutProgramEnrollmentsInputSchema),z.lazy(() => DiscountUncheckedUpdateWithoutProgramEnrollmentsInputSchema) ]),
}).strict();

export default DiscountUpdateToOneWithWhereWithoutProgramEnrollmentsInputSchema;
