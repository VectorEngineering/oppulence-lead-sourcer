import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceMemberWhereUniqueInputSchema } from './WorkspaceMemberWhereUniqueInputSchema';
import { WorkspaceMemberCreateWithoutUserInputSchema } from './WorkspaceMemberCreateWithoutUserInputSchema';
import { WorkspaceMemberUncheckedCreateWithoutUserInputSchema } from './WorkspaceMemberUncheckedCreateWithoutUserInputSchema';

export const WorkspaceMemberCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.WorkspaceMemberCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => WorkspaceMemberWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WorkspaceMemberCreateWithoutUserInputSchema),z.lazy(() => WorkspaceMemberUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default WorkspaceMemberCreateOrConnectWithoutUserInputSchema;
