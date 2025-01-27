import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealScalarWhereInputSchema } from './DealScalarWhereInputSchema';
import { DealUpdateManyMutationInputSchema } from './DealUpdateManyMutationInputSchema';
import { DealUncheckedUpdateManyWithoutPipelineInputSchema } from './DealUncheckedUpdateManyWithoutPipelineInputSchema';

export const DealUpdateManyWithWhereWithoutPipelineInputSchema: z.ZodType<Prisma.DealUpdateManyWithWhereWithoutPipelineInput> = z.object({
  where: z.lazy(() => DealScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DealUpdateManyMutationInputSchema),z.lazy(() => DealUncheckedUpdateManyWithoutPipelineInputSchema) ]),
}).strict();

export default DealUpdateManyWithWhereWithoutPipelineInputSchema;
