import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { YearInReviewWhereUniqueInputSchema } from './YearInReviewWhereUniqueInputSchema';
import { YearInReviewCreateWithoutWorkspaceInputSchema } from './YearInReviewCreateWithoutWorkspaceInputSchema';
import { YearInReviewUncheckedCreateWithoutWorkspaceInputSchema } from './YearInReviewUncheckedCreateWithoutWorkspaceInputSchema';

export const YearInReviewCreateOrConnectWithoutWorkspaceInputSchema: z.ZodType<Prisma.YearInReviewCreateOrConnectWithoutWorkspaceInput> = z.object({
  where: z.lazy(() => YearInReviewWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => YearInReviewCreateWithoutWorkspaceInputSchema),z.lazy(() => YearInReviewUncheckedCreateWithoutWorkspaceInputSchema) ]),
}).strict();

export default YearInReviewCreateOrConnectWithoutWorkspaceInputSchema;
