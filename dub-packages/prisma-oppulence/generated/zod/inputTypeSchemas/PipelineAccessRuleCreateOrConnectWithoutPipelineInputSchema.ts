import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineAccessRuleWhereUniqueInputSchema } from './PipelineAccessRuleWhereUniqueInputSchema';
import { PipelineAccessRuleCreateWithoutPipelineInputSchema } from './PipelineAccessRuleCreateWithoutPipelineInputSchema';
import { PipelineAccessRuleUncheckedCreateWithoutPipelineInputSchema } from './PipelineAccessRuleUncheckedCreateWithoutPipelineInputSchema';

export const PipelineAccessRuleCreateOrConnectWithoutPipelineInputSchema: z.ZodType<Prisma.PipelineAccessRuleCreateOrConnectWithoutPipelineInput> = z.object({
  where: z.lazy(() => PipelineAccessRuleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PipelineAccessRuleCreateWithoutPipelineInputSchema),z.lazy(() => PipelineAccessRuleUncheckedCreateWithoutPipelineInputSchema) ]),
}).strict();

export default PipelineAccessRuleCreateOrConnectWithoutPipelineInputSchema;
