import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineUpdateWithoutDealsInputSchema } from './PipelineUpdateWithoutDealsInputSchema';
import { PipelineUncheckedUpdateWithoutDealsInputSchema } from './PipelineUncheckedUpdateWithoutDealsInputSchema';
import { PipelineCreateWithoutDealsInputSchema } from './PipelineCreateWithoutDealsInputSchema';
import { PipelineUncheckedCreateWithoutDealsInputSchema } from './PipelineUncheckedCreateWithoutDealsInputSchema';
import { PipelineWhereInputSchema } from './PipelineWhereInputSchema';

export const PipelineUpsertWithoutDealsInputSchema: z.ZodType<Prisma.PipelineUpsertWithoutDealsInput> = z.object({
  update: z.union([ z.lazy(() => PipelineUpdateWithoutDealsInputSchema),z.lazy(() => PipelineUncheckedUpdateWithoutDealsInputSchema) ]),
  create: z.union([ z.lazy(() => PipelineCreateWithoutDealsInputSchema),z.lazy(() => PipelineUncheckedCreateWithoutDealsInputSchema) ]),
  where: z.lazy(() => PipelineWhereInputSchema).optional()
}).strict();

export default PipelineUpsertWithoutDealsInputSchema;
