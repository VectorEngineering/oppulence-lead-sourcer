import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineAccessRuleScalarWhereInputSchema } from './PipelineAccessRuleScalarWhereInputSchema';
import { PipelineAccessRuleUpdateManyMutationInputSchema } from './PipelineAccessRuleUpdateManyMutationInputSchema';
import { PipelineAccessRuleUncheckedUpdateManyWithoutPipelineInputSchema } from './PipelineAccessRuleUncheckedUpdateManyWithoutPipelineInputSchema';

export const PipelineAccessRuleUpdateManyWithWhereWithoutPipelineInputSchema: z.ZodType<Prisma.PipelineAccessRuleUpdateManyWithWhereWithoutPipelineInput> = z.object({
  where: z.lazy(() => PipelineAccessRuleScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PipelineAccessRuleUpdateManyMutationInputSchema),z.lazy(() => PipelineAccessRuleUncheckedUpdateManyWithoutPipelineInputSchema) ]),
}).strict();

export default PipelineAccessRuleUpdateManyWithWhereWithoutPipelineInputSchema;
