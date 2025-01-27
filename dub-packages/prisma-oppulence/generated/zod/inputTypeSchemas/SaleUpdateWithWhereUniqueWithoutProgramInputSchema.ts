import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SaleWhereUniqueInputSchema } from './SaleWhereUniqueInputSchema';
import { SaleUpdateWithoutProgramInputSchema } from './SaleUpdateWithoutProgramInputSchema';
import { SaleUncheckedUpdateWithoutProgramInputSchema } from './SaleUncheckedUpdateWithoutProgramInputSchema';

export const SaleUpdateWithWhereUniqueWithoutProgramInputSchema: z.ZodType<Prisma.SaleUpdateWithWhereUniqueWithoutProgramInput> = z.object({
  where: z.lazy(() => SaleWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SaleUpdateWithoutProgramInputSchema),z.lazy(() => SaleUncheckedUpdateWithoutProgramInputSchema) ]),
}).strict();

export default SaleUpdateWithWhereUniqueWithoutProgramInputSchema;
