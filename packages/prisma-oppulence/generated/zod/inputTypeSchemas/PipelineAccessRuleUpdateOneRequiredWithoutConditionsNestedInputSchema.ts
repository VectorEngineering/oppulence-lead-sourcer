import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineAccessRuleCreateWithoutConditionsInputSchema } from './PipelineAccessRuleCreateWithoutConditionsInputSchema';
import { PipelineAccessRuleUncheckedCreateWithoutConditionsInputSchema } from './PipelineAccessRuleUncheckedCreateWithoutConditionsInputSchema';
import { PipelineAccessRuleCreateOrConnectWithoutConditionsInputSchema } from './PipelineAccessRuleCreateOrConnectWithoutConditionsInputSchema';
import { PipelineAccessRuleUpsertWithoutConditionsInputSchema } from './PipelineAccessRuleUpsertWithoutConditionsInputSchema';
import { PipelineAccessRuleWhereUniqueInputSchema } from './PipelineAccessRuleWhereUniqueInputSchema';
import { PipelineAccessRuleUpdateToOneWithWhereWithoutConditionsInputSchema } from './PipelineAccessRuleUpdateToOneWithWhereWithoutConditionsInputSchema';
import { PipelineAccessRuleUpdateWithoutConditionsInputSchema } from './PipelineAccessRuleUpdateWithoutConditionsInputSchema';
import { PipelineAccessRuleUncheckedUpdateWithoutConditionsInputSchema } from './PipelineAccessRuleUncheckedUpdateWithoutConditionsInputSchema';

export const PipelineAccessRuleUpdateOneRequiredWithoutConditionsNestedInputSchema: z.ZodType<Prisma.PipelineAccessRuleUpdateOneRequiredWithoutConditionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PipelineAccessRuleCreateWithoutConditionsInputSchema),z.lazy(() => PipelineAccessRuleUncheckedCreateWithoutConditionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PipelineAccessRuleCreateOrConnectWithoutConditionsInputSchema).optional(),
  upsert: z.lazy(() => PipelineAccessRuleUpsertWithoutConditionsInputSchema).optional(),
  connect: z.lazy(() => PipelineAccessRuleWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PipelineAccessRuleUpdateToOneWithWhereWithoutConditionsInputSchema),z.lazy(() => PipelineAccessRuleUpdateWithoutConditionsInputSchema),z.lazy(() => PipelineAccessRuleUncheckedUpdateWithoutConditionsInputSchema) ]).optional(),
}).strict();

export default PipelineAccessRuleUpdateOneRequiredWithoutConditionsNestedInputSchema;
