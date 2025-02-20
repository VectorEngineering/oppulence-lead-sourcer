import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DiscountScalarWhereInputSchema } from './DiscountScalarWhereInputSchema';
import { DiscountUpdateManyMutationInputSchema } from './DiscountUpdateManyMutationInputSchema';
import { DiscountUncheckedUpdateManyWithoutProgramInputSchema } from './DiscountUncheckedUpdateManyWithoutProgramInputSchema';

export const DiscountUpdateManyWithWhereWithoutProgramInputSchema: z.ZodType<Prisma.DiscountUpdateManyWithWhereWithoutProgramInput> = z.object({
  where: z.lazy(() => DiscountScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DiscountUpdateManyMutationInputSchema),z.lazy(() => DiscountUncheckedUpdateManyWithoutProgramInputSchema) ]),
}).strict();

export default DiscountUpdateManyWithWhereWithoutProgramInputSchema;
