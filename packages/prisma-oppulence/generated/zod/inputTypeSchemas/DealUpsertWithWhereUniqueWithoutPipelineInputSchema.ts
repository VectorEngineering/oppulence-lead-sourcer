import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema';
import { DealUpdateWithoutPipelineInputSchema } from './DealUpdateWithoutPipelineInputSchema';
import { DealUncheckedUpdateWithoutPipelineInputSchema } from './DealUncheckedUpdateWithoutPipelineInputSchema';
import { DealCreateWithoutPipelineInputSchema } from './DealCreateWithoutPipelineInputSchema';
import { DealUncheckedCreateWithoutPipelineInputSchema } from './DealUncheckedCreateWithoutPipelineInputSchema';

export const DealUpsertWithWhereUniqueWithoutPipelineInputSchema: z.ZodType<Prisma.DealUpsertWithWhereUniqueWithoutPipelineInput> = z.object({
  where: z.lazy(() => DealWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => DealUpdateWithoutPipelineInputSchema),z.lazy(() => DealUncheckedUpdateWithoutPipelineInputSchema) ]),
  create: z.union([ z.lazy(() => DealCreateWithoutPipelineInputSchema),z.lazy(() => DealUncheckedCreateWithoutPipelineInputSchema) ]),
}).strict();

export default DealUpsertWithWhereUniqueWithoutPipelineInputSchema;
