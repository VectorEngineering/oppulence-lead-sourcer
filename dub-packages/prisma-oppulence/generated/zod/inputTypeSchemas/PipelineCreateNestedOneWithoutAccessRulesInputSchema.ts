import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineCreateWithoutAccessRulesInputSchema } from './PipelineCreateWithoutAccessRulesInputSchema';
import { PipelineUncheckedCreateWithoutAccessRulesInputSchema } from './PipelineUncheckedCreateWithoutAccessRulesInputSchema';
import { PipelineCreateOrConnectWithoutAccessRulesInputSchema } from './PipelineCreateOrConnectWithoutAccessRulesInputSchema';
import { PipelineWhereUniqueInputSchema } from './PipelineWhereUniqueInputSchema';

export const PipelineCreateNestedOneWithoutAccessRulesInputSchema: z.ZodType<Prisma.PipelineCreateNestedOneWithoutAccessRulesInput> = z.object({
  create: z.union([ z.lazy(() => PipelineCreateWithoutAccessRulesInputSchema),z.lazy(() => PipelineUncheckedCreateWithoutAccessRulesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PipelineCreateOrConnectWithoutAccessRulesInputSchema).optional(),
  connect: z.lazy(() => PipelineWhereUniqueInputSchema).optional()
}).strict();

export default PipelineCreateNestedOneWithoutAccessRulesInputSchema;
