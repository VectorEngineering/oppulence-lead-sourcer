import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { YearInReviewCreateWithoutWorkspaceInputSchema } from './YearInReviewCreateWithoutWorkspaceInputSchema';
import { YearInReviewUncheckedCreateWithoutWorkspaceInputSchema } from './YearInReviewUncheckedCreateWithoutWorkspaceInputSchema';
import { YearInReviewCreateOrConnectWithoutWorkspaceInputSchema } from './YearInReviewCreateOrConnectWithoutWorkspaceInputSchema';
import { YearInReviewUpsertWithWhereUniqueWithoutWorkspaceInputSchema } from './YearInReviewUpsertWithWhereUniqueWithoutWorkspaceInputSchema';
import { YearInReviewCreateManyWorkspaceInputEnvelopeSchema } from './YearInReviewCreateManyWorkspaceInputEnvelopeSchema';
import { YearInReviewWhereUniqueInputSchema } from './YearInReviewWhereUniqueInputSchema';
import { YearInReviewUpdateWithWhereUniqueWithoutWorkspaceInputSchema } from './YearInReviewUpdateWithWhereUniqueWithoutWorkspaceInputSchema';
import { YearInReviewUpdateManyWithWhereWithoutWorkspaceInputSchema } from './YearInReviewUpdateManyWithWhereWithoutWorkspaceInputSchema';
import { YearInReviewScalarWhereInputSchema } from './YearInReviewScalarWhereInputSchema';

export const YearInReviewUpdateManyWithoutWorkspaceNestedInputSchema: z.ZodType<Prisma.YearInReviewUpdateManyWithoutWorkspaceNestedInput> = z.object({
  create: z.union([ z.lazy(() => YearInReviewCreateWithoutWorkspaceInputSchema),z.lazy(() => YearInReviewCreateWithoutWorkspaceInputSchema).array(),z.lazy(() => YearInReviewUncheckedCreateWithoutWorkspaceInputSchema),z.lazy(() => YearInReviewUncheckedCreateWithoutWorkspaceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => YearInReviewCreateOrConnectWithoutWorkspaceInputSchema),z.lazy(() => YearInReviewCreateOrConnectWithoutWorkspaceInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => YearInReviewUpsertWithWhereUniqueWithoutWorkspaceInputSchema),z.lazy(() => YearInReviewUpsertWithWhereUniqueWithoutWorkspaceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => YearInReviewCreateManyWorkspaceInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => YearInReviewWhereUniqueInputSchema),z.lazy(() => YearInReviewWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => YearInReviewWhereUniqueInputSchema),z.lazy(() => YearInReviewWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => YearInReviewWhereUniqueInputSchema),z.lazy(() => YearInReviewWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => YearInReviewWhereUniqueInputSchema),z.lazy(() => YearInReviewWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => YearInReviewUpdateWithWhereUniqueWithoutWorkspaceInputSchema),z.lazy(() => YearInReviewUpdateWithWhereUniqueWithoutWorkspaceInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => YearInReviewUpdateManyWithWhereWithoutWorkspaceInputSchema),z.lazy(() => YearInReviewUpdateManyWithWhereWithoutWorkspaceInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => YearInReviewScalarWhereInputSchema),z.lazy(() => YearInReviewScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default YearInReviewUpdateManyWithoutWorkspaceNestedInputSchema;
