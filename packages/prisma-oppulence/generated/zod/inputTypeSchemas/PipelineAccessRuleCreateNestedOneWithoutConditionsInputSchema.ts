import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineAccessRuleCreateWithoutConditionsInputSchema } from './PipelineAccessRuleCreateWithoutConditionsInputSchema';
import { PipelineAccessRuleUncheckedCreateWithoutConditionsInputSchema } from './PipelineAccessRuleUncheckedCreateWithoutConditionsInputSchema';
import { PipelineAccessRuleCreateOrConnectWithoutConditionsInputSchema } from './PipelineAccessRuleCreateOrConnectWithoutConditionsInputSchema';
import { PipelineAccessRuleWhereUniqueInputSchema } from './PipelineAccessRuleWhereUniqueInputSchema';

export const PipelineAccessRuleCreateNestedOneWithoutConditionsInputSchema: z.ZodType<Prisma.PipelineAccessRuleCreateNestedOneWithoutConditionsInput> = z.object({
  create: z.union([ z.lazy(() => PipelineAccessRuleCreateWithoutConditionsInputSchema),z.lazy(() => PipelineAccessRuleUncheckedCreateWithoutConditionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PipelineAccessRuleCreateOrConnectWithoutConditionsInputSchema).optional(),
  connect: z.lazy(() => PipelineAccessRuleWhereUniqueInputSchema).optional()
}).strict();

export default PipelineAccessRuleCreateNestedOneWithoutConditionsInputSchema;
