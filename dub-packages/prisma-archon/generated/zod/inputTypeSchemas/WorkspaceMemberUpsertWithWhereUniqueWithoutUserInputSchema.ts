import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceMemberWhereUniqueInputSchema } from './WorkspaceMemberWhereUniqueInputSchema';
import { WorkspaceMemberUpdateWithoutUserInputSchema } from './WorkspaceMemberUpdateWithoutUserInputSchema';
import { WorkspaceMemberUncheckedUpdateWithoutUserInputSchema } from './WorkspaceMemberUncheckedUpdateWithoutUserInputSchema';
import { WorkspaceMemberCreateWithoutUserInputSchema } from './WorkspaceMemberCreateWithoutUserInputSchema';
import { WorkspaceMemberUncheckedCreateWithoutUserInputSchema } from './WorkspaceMemberUncheckedCreateWithoutUserInputSchema';

export const WorkspaceMemberUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.WorkspaceMemberUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => WorkspaceMemberWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => WorkspaceMemberUpdateWithoutUserInputSchema),z.lazy(() => WorkspaceMemberUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => WorkspaceMemberCreateWithoutUserInputSchema),z.lazy(() => WorkspaceMemberUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default WorkspaceMemberUpsertWithWhereUniqueWithoutUserInputSchema;
