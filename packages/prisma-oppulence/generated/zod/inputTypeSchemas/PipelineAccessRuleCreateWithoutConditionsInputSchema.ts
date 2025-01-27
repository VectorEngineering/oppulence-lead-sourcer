import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AccessLevelSchema } from './AccessLevelSchema';
import { PipelineCreateNestedOneWithoutAccessRulesInputSchema } from './PipelineCreateNestedOneWithoutAccessRulesInputSchema';

export const PipelineAccessRuleCreateWithoutConditionsInputSchema: z.ZodType<Prisma.PipelineAccessRuleCreateWithoutConditionsInput> = z.object({
  id: z.string().cuid().optional(),
  roleId: z.string().optional().nullable(),
  userId: z.string().optional().nullable(),
  teamId: z.string().optional().nullable(),
  accessLevel: z.lazy(() => AccessLevelSchema),
  pipeline: z.lazy(() => PipelineCreateNestedOneWithoutAccessRulesInputSchema)
}).strict();

export default PipelineAccessRuleCreateWithoutConditionsInputSchema;
