import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealScalarWhereInputSchema } from './DealScalarWhereInputSchema';
import { DealUpdateManyMutationInputSchema } from './DealUpdateManyMutationInputSchema';
import { DealUncheckedUpdateManyWithoutLeadInputSchema } from './DealUncheckedUpdateManyWithoutLeadInputSchema';

export const DealUpdateManyWithWhereWithoutLeadInputSchema: z.ZodType<Prisma.DealUpdateManyWithWhereWithoutLeadInput> = z.object({
  where: z.lazy(() => DealScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DealUpdateManyMutationInputSchema),z.lazy(() => DealUncheckedUpdateManyWithoutLeadInputSchema) ]),
}).strict();

export default DealUpdateManyWithWhereWithoutLeadInputSchema;
