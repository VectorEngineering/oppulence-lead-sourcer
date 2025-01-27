import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineAccessRuleWhereInputSchema } from './PipelineAccessRuleWhereInputSchema';
import { PipelineAccessRuleUpdateWithoutConditionsInputSchema } from './PipelineAccessRuleUpdateWithoutConditionsInputSchema';
import { PipelineAccessRuleUncheckedUpdateWithoutConditionsInputSchema } from './PipelineAccessRuleUncheckedUpdateWithoutConditionsInputSchema';

export const PipelineAccessRuleUpdateToOneWithWhereWithoutConditionsInputSchema: z.ZodType<Prisma.PipelineAccessRuleUpdateToOneWithWhereWithoutConditionsInput> = z.object({
  where: z.lazy(() => PipelineAccessRuleWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PipelineAccessRuleUpdateWithoutConditionsInputSchema),z.lazy(() => PipelineAccessRuleUncheckedUpdateWithoutConditionsInputSchema) ]),
}).strict();

export default PipelineAccessRuleUpdateToOneWithWhereWithoutConditionsInputSchema;
