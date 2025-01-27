import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineAccessRuleWhereUniqueInputSchema } from './PipelineAccessRuleWhereUniqueInputSchema';
import { PipelineAccessRuleUpdateWithoutPipelineInputSchema } from './PipelineAccessRuleUpdateWithoutPipelineInputSchema';
import { PipelineAccessRuleUncheckedUpdateWithoutPipelineInputSchema } from './PipelineAccessRuleUncheckedUpdateWithoutPipelineInputSchema';
import { PipelineAccessRuleCreateWithoutPipelineInputSchema } from './PipelineAccessRuleCreateWithoutPipelineInputSchema';
import { PipelineAccessRuleUncheckedCreateWithoutPipelineInputSchema } from './PipelineAccessRuleUncheckedCreateWithoutPipelineInputSchema';

export const PipelineAccessRuleUpsertWithWhereUniqueWithoutPipelineInputSchema: z.ZodType<Prisma.PipelineAccessRuleUpsertWithWhereUniqueWithoutPipelineInput> = z.object({
  where: z.lazy(() => PipelineAccessRuleWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PipelineAccessRuleUpdateWithoutPipelineInputSchema),z.lazy(() => PipelineAccessRuleUncheckedUpdateWithoutPipelineInputSchema) ]),
  create: z.union([ z.lazy(() => PipelineAccessRuleCreateWithoutPipelineInputSchema),z.lazy(() => PipelineAccessRuleUncheckedCreateWithoutPipelineInputSchema) ]),
}).strict();

export default PipelineAccessRuleUpsertWithWhereUniqueWithoutPipelineInputSchema;
