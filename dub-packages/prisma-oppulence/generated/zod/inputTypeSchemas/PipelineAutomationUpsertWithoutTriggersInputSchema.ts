import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineAutomationUpdateWithoutTriggersInputSchema } from './PipelineAutomationUpdateWithoutTriggersInputSchema';
import { PipelineAutomationUncheckedUpdateWithoutTriggersInputSchema } from './PipelineAutomationUncheckedUpdateWithoutTriggersInputSchema';
import { PipelineAutomationCreateWithoutTriggersInputSchema } from './PipelineAutomationCreateWithoutTriggersInputSchema';
import { PipelineAutomationUncheckedCreateWithoutTriggersInputSchema } from './PipelineAutomationUncheckedCreateWithoutTriggersInputSchema';
import { PipelineAutomationWhereInputSchema } from './PipelineAutomationWhereInputSchema';

export const PipelineAutomationUpsertWithoutTriggersInputSchema: z.ZodType<Prisma.PipelineAutomationUpsertWithoutTriggersInput> = z.object({
  update: z.union([ z.lazy(() => PipelineAutomationUpdateWithoutTriggersInputSchema),z.lazy(() => PipelineAutomationUncheckedUpdateWithoutTriggersInputSchema) ]),
  create: z.union([ z.lazy(() => PipelineAutomationCreateWithoutTriggersInputSchema),z.lazy(() => PipelineAutomationUncheckedCreateWithoutTriggersInputSchema) ]),
  where: z.lazy(() => PipelineAutomationWhereInputSchema).optional()
}).strict();

export default PipelineAutomationUpsertWithoutTriggersInputSchema;
