import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineUpdateWithoutIntegrationsInputSchema } from './PipelineUpdateWithoutIntegrationsInputSchema';
import { PipelineUncheckedUpdateWithoutIntegrationsInputSchema } from './PipelineUncheckedUpdateWithoutIntegrationsInputSchema';
import { PipelineCreateWithoutIntegrationsInputSchema } from './PipelineCreateWithoutIntegrationsInputSchema';
import { PipelineUncheckedCreateWithoutIntegrationsInputSchema } from './PipelineUncheckedCreateWithoutIntegrationsInputSchema';
import { PipelineWhereInputSchema } from './PipelineWhereInputSchema';

export const PipelineUpsertWithoutIntegrationsInputSchema: z.ZodType<Prisma.PipelineUpsertWithoutIntegrationsInput> = z.object({
  update: z.union([ z.lazy(() => PipelineUpdateWithoutIntegrationsInputSchema),z.lazy(() => PipelineUncheckedUpdateWithoutIntegrationsInputSchema) ]),
  create: z.union([ z.lazy(() => PipelineCreateWithoutIntegrationsInputSchema),z.lazy(() => PipelineUncheckedCreateWithoutIntegrationsInputSchema) ]),
  where: z.lazy(() => PipelineWhereInputSchema).optional()
}).strict();

export default PipelineUpsertWithoutIntegrationsInputSchema;
