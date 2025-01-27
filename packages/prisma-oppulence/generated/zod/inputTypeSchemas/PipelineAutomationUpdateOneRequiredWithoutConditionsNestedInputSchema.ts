import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineAutomationCreateWithoutConditionsInputSchema } from './PipelineAutomationCreateWithoutConditionsInputSchema';
import { PipelineAutomationUncheckedCreateWithoutConditionsInputSchema } from './PipelineAutomationUncheckedCreateWithoutConditionsInputSchema';
import { PipelineAutomationCreateOrConnectWithoutConditionsInputSchema } from './PipelineAutomationCreateOrConnectWithoutConditionsInputSchema';
import { PipelineAutomationUpsertWithoutConditionsInputSchema } from './PipelineAutomationUpsertWithoutConditionsInputSchema';
import { PipelineAutomationWhereUniqueInputSchema } from './PipelineAutomationWhereUniqueInputSchema';
import { PipelineAutomationUpdateToOneWithWhereWithoutConditionsInputSchema } from './PipelineAutomationUpdateToOneWithWhereWithoutConditionsInputSchema';
import { PipelineAutomationUpdateWithoutConditionsInputSchema } from './PipelineAutomationUpdateWithoutConditionsInputSchema';
import { PipelineAutomationUncheckedUpdateWithoutConditionsInputSchema } from './PipelineAutomationUncheckedUpdateWithoutConditionsInputSchema';

export const PipelineAutomationUpdateOneRequiredWithoutConditionsNestedInputSchema: z.ZodType<Prisma.PipelineAutomationUpdateOneRequiredWithoutConditionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PipelineAutomationCreateWithoutConditionsInputSchema),z.lazy(() => PipelineAutomationUncheckedCreateWithoutConditionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PipelineAutomationCreateOrConnectWithoutConditionsInputSchema).optional(),
  upsert: z.lazy(() => PipelineAutomationUpsertWithoutConditionsInputSchema).optional(),
  connect: z.lazy(() => PipelineAutomationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PipelineAutomationUpdateToOneWithWhereWithoutConditionsInputSchema),z.lazy(() => PipelineAutomationUpdateWithoutConditionsInputSchema),z.lazy(() => PipelineAutomationUncheckedUpdateWithoutConditionsInputSchema) ]).optional(),
}).strict();

export default PipelineAutomationUpdateOneRequiredWithoutConditionsNestedInputSchema;
