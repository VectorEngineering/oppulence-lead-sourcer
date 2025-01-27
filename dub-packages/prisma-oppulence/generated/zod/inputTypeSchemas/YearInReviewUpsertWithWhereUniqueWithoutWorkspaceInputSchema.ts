import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { YearInReviewWhereUniqueInputSchema } from './YearInReviewWhereUniqueInputSchema';
import { YearInReviewUpdateWithoutWorkspaceInputSchema } from './YearInReviewUpdateWithoutWorkspaceInputSchema';
import { YearInReviewUncheckedUpdateWithoutWorkspaceInputSchema } from './YearInReviewUncheckedUpdateWithoutWorkspaceInputSchema';
import { YearInReviewCreateWithoutWorkspaceInputSchema } from './YearInReviewCreateWithoutWorkspaceInputSchema';
import { YearInReviewUncheckedCreateWithoutWorkspaceInputSchema } from './YearInReviewUncheckedCreateWithoutWorkspaceInputSchema';

export const YearInReviewUpsertWithWhereUniqueWithoutWorkspaceInputSchema: z.ZodType<Prisma.YearInReviewUpsertWithWhereUniqueWithoutWorkspaceInput> = z.object({
  where: z.lazy(() => YearInReviewWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => YearInReviewUpdateWithoutWorkspaceInputSchema),z.lazy(() => YearInReviewUncheckedUpdateWithoutWorkspaceInputSchema) ]),
  create: z.union([ z.lazy(() => YearInReviewCreateWithoutWorkspaceInputSchema),z.lazy(() => YearInReviewUncheckedCreateWithoutWorkspaceInputSchema) ]),
}).strict();

export default YearInReviewUpsertWithWhereUniqueWithoutWorkspaceInputSchema;
