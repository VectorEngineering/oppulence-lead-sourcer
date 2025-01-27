import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceUpdateWithoutWorkspaceInvitationsInputSchema } from './WorkspaceUpdateWithoutWorkspaceInvitationsInputSchema';
import { WorkspaceUncheckedUpdateWithoutWorkspaceInvitationsInputSchema } from './WorkspaceUncheckedUpdateWithoutWorkspaceInvitationsInputSchema';
import { WorkspaceCreateWithoutWorkspaceInvitationsInputSchema } from './WorkspaceCreateWithoutWorkspaceInvitationsInputSchema';
import { WorkspaceUncheckedCreateWithoutWorkspaceInvitationsInputSchema } from './WorkspaceUncheckedCreateWithoutWorkspaceInvitationsInputSchema';
import { WorkspaceWhereInputSchema } from './WorkspaceWhereInputSchema';

export const WorkspaceUpsertWithoutWorkspaceInvitationsInputSchema: z.ZodType<Prisma.WorkspaceUpsertWithoutWorkspaceInvitationsInput> = z.object({
  update: z.union([ z.lazy(() => WorkspaceUpdateWithoutWorkspaceInvitationsInputSchema),z.lazy(() => WorkspaceUncheckedUpdateWithoutWorkspaceInvitationsInputSchema) ]),
  create: z.union([ z.lazy(() => WorkspaceCreateWithoutWorkspaceInvitationsInputSchema),z.lazy(() => WorkspaceUncheckedCreateWithoutWorkspaceInvitationsInputSchema) ]),
  where: z.lazy(() => WorkspaceWhereInputSchema).optional()
}).strict();

export default WorkspaceUpsertWithoutWorkspaceInvitationsInputSchema;
