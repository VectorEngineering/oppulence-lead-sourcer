import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineCreateWithoutIntegrationsInputSchema } from './PipelineCreateWithoutIntegrationsInputSchema';
import { PipelineUncheckedCreateWithoutIntegrationsInputSchema } from './PipelineUncheckedCreateWithoutIntegrationsInputSchema';
import { PipelineCreateOrConnectWithoutIntegrationsInputSchema } from './PipelineCreateOrConnectWithoutIntegrationsInputSchema';
import { PipelineUpsertWithoutIntegrationsInputSchema } from './PipelineUpsertWithoutIntegrationsInputSchema';
import { PipelineWhereUniqueInputSchema } from './PipelineWhereUniqueInputSchema';
import { PipelineUpdateToOneWithWhereWithoutIntegrationsInputSchema } from './PipelineUpdateToOneWithWhereWithoutIntegrationsInputSchema';
import { PipelineUpdateWithoutIntegrationsInputSchema } from './PipelineUpdateWithoutIntegrationsInputSchema';
import { PipelineUncheckedUpdateWithoutIntegrationsInputSchema } from './PipelineUncheckedUpdateWithoutIntegrationsInputSchema';

export const PipelineUpdateOneRequiredWithoutIntegrationsNestedInputSchema: z.ZodType<Prisma.PipelineUpdateOneRequiredWithoutIntegrationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PipelineCreateWithoutIntegrationsInputSchema),z.lazy(() => PipelineUncheckedCreateWithoutIntegrationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PipelineCreateOrConnectWithoutIntegrationsInputSchema).optional(),
  upsert: z.lazy(() => PipelineUpsertWithoutIntegrationsInputSchema).optional(),
  connect: z.lazy(() => PipelineWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PipelineUpdateToOneWithWhereWithoutIntegrationsInputSchema),z.lazy(() => PipelineUpdateWithoutIntegrationsInputSchema),z.lazy(() => PipelineUncheckedUpdateWithoutIntegrationsInputSchema) ]).optional(),
}).strict();

export default PipelineUpdateOneRequiredWithoutIntegrationsNestedInputSchema;
