import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceWhereUniqueInputSchema } from './WorkspaceWhereUniqueInputSchema';
import { WorkspaceCreateWithoutWorkspaceInvitationsInputSchema } from './WorkspaceCreateWithoutWorkspaceInvitationsInputSchema';
import { WorkspaceUncheckedCreateWithoutWorkspaceInvitationsInputSchema } from './WorkspaceUncheckedCreateWithoutWorkspaceInvitationsInputSchema';

export const WorkspaceCreateOrConnectWithoutWorkspaceInvitationsInputSchema: z.ZodType<Prisma.WorkspaceCreateOrConnectWithoutWorkspaceInvitationsInput> = z.object({
  where: z.lazy(() => WorkspaceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WorkspaceCreateWithoutWorkspaceInvitationsInputSchema),z.lazy(() => WorkspaceUncheckedCreateWithoutWorkspaceInvitationsInputSchema) ]),
}).strict();

export default WorkspaceCreateOrConnectWithoutWorkspaceInvitationsInputSchema;
