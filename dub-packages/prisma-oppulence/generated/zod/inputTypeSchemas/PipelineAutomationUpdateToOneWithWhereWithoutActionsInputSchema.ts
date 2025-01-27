import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineAutomationWhereInputSchema } from './PipelineAutomationWhereInputSchema';
import { PipelineAutomationUpdateWithoutActionsInputSchema } from './PipelineAutomationUpdateWithoutActionsInputSchema';
import { PipelineAutomationUncheckedUpdateWithoutActionsInputSchema } from './PipelineAutomationUncheckedUpdateWithoutActionsInputSchema';

export const PipelineAutomationUpdateToOneWithWhereWithoutActionsInputSchema: z.ZodType<Prisma.PipelineAutomationUpdateToOneWithWhereWithoutActionsInput> = z.object({
  where: z.lazy(() => PipelineAutomationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PipelineAutomationUpdateWithoutActionsInputSchema),z.lazy(() => PipelineAutomationUncheckedUpdateWithoutActionsInputSchema) ]),
}).strict();

export default PipelineAutomationUpdateToOneWithWhereWithoutActionsInputSchema;
