import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceMemberCreateWithoutWorkspaceInputSchema } from './WorkspaceMemberCreateWithoutWorkspaceInputSchema';
import { WorkspaceMemberUncheckedCreateWithoutWorkspaceInputSchema } from './WorkspaceMemberUncheckedCreateWithoutWorkspaceInputSchema';
import { WorkspaceMemberCreateOrConnectWithoutWorkspaceInputSchema } from './WorkspaceMemberCreateOrConnectWithoutWorkspaceInputSchema';
import { WorkspaceMemberCreateManyWorkspaceInputEnvelopeSchema } from './WorkspaceMemberCreateManyWorkspaceInputEnvelopeSchema';
import { WorkspaceMemberWhereUniqueInputSchema } from './WorkspaceMemberWhereUniqueInputSchema';

export const WorkspaceMemberCreateNestedManyWithoutWorkspaceInputSchema: z.ZodType<Prisma.WorkspaceMemberCreateNestedManyWithoutWorkspaceInput> = z.object({
  create: z.union([ z.lazy(() => WorkspaceMemberCreateWithoutWorkspaceInputSchema),z.lazy(() => WorkspaceMemberCreateWithoutWorkspaceInputSchema).array(),z.lazy(() => WorkspaceMemberUncheckedCreateWithoutWorkspaceInputSchema),z.lazy(() => WorkspaceMemberUncheckedCreateWithoutWorkspaceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WorkspaceMemberCreateOrConnectWithoutWorkspaceInputSchema),z.lazy(() => WorkspaceMemberCreateOrConnectWithoutWorkspaceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WorkspaceMemberCreateManyWorkspaceInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => WorkspaceMemberWhereUniqueInputSchema),z.lazy(() => WorkspaceMemberWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default WorkspaceMemberCreateNestedManyWithoutWorkspaceInputSchema;
