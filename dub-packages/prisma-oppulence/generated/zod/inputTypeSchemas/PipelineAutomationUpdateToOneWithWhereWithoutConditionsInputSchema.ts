import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineAutomationWhereInputSchema } from './PipelineAutomationWhereInputSchema';
import { PipelineAutomationUpdateWithoutConditionsInputSchema } from './PipelineAutomationUpdateWithoutConditionsInputSchema';
import { PipelineAutomationUncheckedUpdateWithoutConditionsInputSchema } from './PipelineAutomationUncheckedUpdateWithoutConditionsInputSchema';

export const PipelineAutomationUpdateToOneWithWhereWithoutConditionsInputSchema: z.ZodType<Prisma.PipelineAutomationUpdateToOneWithWhereWithoutConditionsInput> = z.object({
  where: z.lazy(() => PipelineAutomationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PipelineAutomationUpdateWithoutConditionsInputSchema),z.lazy(() => PipelineAutomationUncheckedUpdateWithoutConditionsInputSchema) ]),
}).strict();

export default PipelineAutomationUpdateToOneWithWhereWithoutConditionsInputSchema;
