import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineUpdateWithoutAccessRulesInputSchema } from './PipelineUpdateWithoutAccessRulesInputSchema';
import { PipelineUncheckedUpdateWithoutAccessRulesInputSchema } from './PipelineUncheckedUpdateWithoutAccessRulesInputSchema';
import { PipelineCreateWithoutAccessRulesInputSchema } from './PipelineCreateWithoutAccessRulesInputSchema';
import { PipelineUncheckedCreateWithoutAccessRulesInputSchema } from './PipelineUncheckedCreateWithoutAccessRulesInputSchema';
import { PipelineWhereInputSchema } from './PipelineWhereInputSchema';

export const PipelineUpsertWithoutAccessRulesInputSchema: z.ZodType<Prisma.PipelineUpsertWithoutAccessRulesInput> = z.object({
  update: z.union([ z.lazy(() => PipelineUpdateWithoutAccessRulesInputSchema),z.lazy(() => PipelineUncheckedUpdateWithoutAccessRulesInputSchema) ]),
  create: z.union([ z.lazy(() => PipelineCreateWithoutAccessRulesInputSchema),z.lazy(() => PipelineUncheckedCreateWithoutAccessRulesInputSchema) ]),
  where: z.lazy(() => PipelineWhereInputSchema).optional()
}).strict();

export default PipelineUpsertWithoutAccessRulesInputSchema;
