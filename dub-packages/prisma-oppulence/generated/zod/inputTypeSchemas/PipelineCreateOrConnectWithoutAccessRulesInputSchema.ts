import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineWhereUniqueInputSchema } from './PipelineWhereUniqueInputSchema';
import { PipelineCreateWithoutAccessRulesInputSchema } from './PipelineCreateWithoutAccessRulesInputSchema';
import { PipelineUncheckedCreateWithoutAccessRulesInputSchema } from './PipelineUncheckedCreateWithoutAccessRulesInputSchema';

export const PipelineCreateOrConnectWithoutAccessRulesInputSchema: z.ZodType<Prisma.PipelineCreateOrConnectWithoutAccessRulesInput> = z.object({
  where: z.lazy(() => PipelineWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PipelineCreateWithoutAccessRulesInputSchema),z.lazy(() => PipelineUncheckedCreateWithoutAccessRulesInputSchema) ]),
}).strict();

export default PipelineCreateOrConnectWithoutAccessRulesInputSchema;
