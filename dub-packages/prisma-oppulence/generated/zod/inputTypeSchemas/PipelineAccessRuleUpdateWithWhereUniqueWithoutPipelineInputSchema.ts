import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineAccessRuleWhereUniqueInputSchema } from './PipelineAccessRuleWhereUniqueInputSchema';
import { PipelineAccessRuleUpdateWithoutPipelineInputSchema } from './PipelineAccessRuleUpdateWithoutPipelineInputSchema';
import { PipelineAccessRuleUncheckedUpdateWithoutPipelineInputSchema } from './PipelineAccessRuleUncheckedUpdateWithoutPipelineInputSchema';

export const PipelineAccessRuleUpdateWithWhereUniqueWithoutPipelineInputSchema: z.ZodType<Prisma.PipelineAccessRuleUpdateWithWhereUniqueWithoutPipelineInput> = z.object({
  where: z.lazy(() => PipelineAccessRuleWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PipelineAccessRuleUpdateWithoutPipelineInputSchema),z.lazy(() => PipelineAccessRuleUncheckedUpdateWithoutPipelineInputSchema) ]),
}).strict();

export default PipelineAccessRuleUpdateWithWhereUniqueWithoutPipelineInputSchema;
