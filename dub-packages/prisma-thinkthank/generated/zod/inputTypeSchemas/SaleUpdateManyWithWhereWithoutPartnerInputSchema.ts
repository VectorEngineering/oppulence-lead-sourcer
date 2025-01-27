import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SaleScalarWhereInputSchema } from './SaleScalarWhereInputSchema';
import { SaleUpdateManyMutationInputSchema } from './SaleUpdateManyMutationInputSchema';
import { SaleUncheckedUpdateManyWithoutPartnerInputSchema } from './SaleUncheckedUpdateManyWithoutPartnerInputSchema';

export const SaleUpdateManyWithWhereWithoutPartnerInputSchema: z.ZodType<Prisma.SaleUpdateManyWithWhereWithoutPartnerInput> = z.object({
  where: z.lazy(() => SaleScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SaleUpdateManyMutationInputSchema),z.lazy(() => SaleUncheckedUpdateManyWithoutPartnerInputSchema) ]),
}).strict();

export default SaleUpdateManyWithWhereWithoutPartnerInputSchema;
