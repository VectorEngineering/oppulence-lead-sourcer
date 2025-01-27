import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadScoreCreateWithoutScoreHistoryInputSchema } from './LeadScoreCreateWithoutScoreHistoryInputSchema';
import { LeadScoreUncheckedCreateWithoutScoreHistoryInputSchema } from './LeadScoreUncheckedCreateWithoutScoreHistoryInputSchema';
import { LeadScoreCreateOrConnectWithoutScoreHistoryInputSchema } from './LeadScoreCreateOrConnectWithoutScoreHistoryInputSchema';
import { LeadScoreUpsertWithoutScoreHistoryInputSchema } from './LeadScoreUpsertWithoutScoreHistoryInputSchema';
import { LeadScoreWhereUniqueInputSchema } from './LeadScoreWhereUniqueInputSchema';
import { LeadScoreUpdateToOneWithWhereWithoutScoreHistoryInputSchema } from './LeadScoreUpdateToOneWithWhereWithoutScoreHistoryInputSchema';
import { LeadScoreUpdateWithoutScoreHistoryInputSchema } from './LeadScoreUpdateWithoutScoreHistoryInputSchema';
import { LeadScoreUncheckedUpdateWithoutScoreHistoryInputSchema } from './LeadScoreUncheckedUpdateWithoutScoreHistoryInputSchema';

export const LeadScoreUpdateOneRequiredWithoutScoreHistoryNestedInputSchema: z.ZodType<Prisma.LeadScoreUpdateOneRequiredWithoutScoreHistoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => LeadScoreCreateWithoutScoreHistoryInputSchema),z.lazy(() => LeadScoreUncheckedCreateWithoutScoreHistoryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LeadScoreCreateOrConnectWithoutScoreHistoryInputSchema).optional(),
  upsert: z.lazy(() => LeadScoreUpsertWithoutScoreHistoryInputSchema).optional(),
  connect: z.lazy(() => LeadScoreWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LeadScoreUpdateToOneWithWhereWithoutScoreHistoryInputSchema),z.lazy(() => LeadScoreUpdateWithoutScoreHistoryInputSchema),z.lazy(() => LeadScoreUncheckedUpdateWithoutScoreHistoryInputSchema) ]).optional(),
}).strict();

export default LeadScoreUpdateOneRequiredWithoutScoreHistoryNestedInputSchema;
