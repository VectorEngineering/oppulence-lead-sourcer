import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineWhereUniqueInputSchema } from './PipelineWhereUniqueInputSchema';
import { PipelineCreateWithoutIntegrationsInputSchema } from './PipelineCreateWithoutIntegrationsInputSchema';
import { PipelineUncheckedCreateWithoutIntegrationsInputSchema } from './PipelineUncheckedCreateWithoutIntegrationsInputSchema';

export const PipelineCreateOrConnectWithoutIntegrationsInputSchema: z.ZodType<Prisma.PipelineCreateOrConnectWithoutIntegrationsInput> = z.object({
  where: z.lazy(() => PipelineWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PipelineCreateWithoutIntegrationsInputSchema),z.lazy(() => PipelineUncheckedCreateWithoutIntegrationsInputSchema) ]),
}).strict();

export default PipelineCreateOrConnectWithoutIntegrationsInputSchema;
