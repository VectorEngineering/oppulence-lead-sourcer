import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DiscountWhereUniqueInputSchema } from './DiscountWhereUniqueInputSchema';
import { DiscountUpdateWithoutProgramInputSchema } from './DiscountUpdateWithoutProgramInputSchema';
import { DiscountUncheckedUpdateWithoutProgramInputSchema } from './DiscountUncheckedUpdateWithoutProgramInputSchema';

export const DiscountUpdateWithWhereUniqueWithoutProgramInputSchema: z.ZodType<Prisma.DiscountUpdateWithWhereUniqueWithoutProgramInput> = z.object({
  where: z.lazy(() => DiscountWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => DiscountUpdateWithoutProgramInputSchema),z.lazy(() => DiscountUncheckedUpdateWithoutProgramInputSchema) ]),
}).strict();

export default DiscountUpdateWithWhereUniqueWithoutProgramInputSchema;
