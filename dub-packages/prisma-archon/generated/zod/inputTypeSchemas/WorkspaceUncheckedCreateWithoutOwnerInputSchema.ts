import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceMemberUncheckedCreateNestedManyWithoutWorkspaceInputSchema } from './WorkspaceMemberUncheckedCreateNestedManyWithoutWorkspaceInputSchema';
import { WorkspaceInvitationUncheckedCreateNestedManyWithoutWorkspaceInputSchema } from './WorkspaceInvitationUncheckedCreateNestedManyWithoutWorkspaceInputSchema';

export const WorkspaceUncheckedCreateWithoutOwnerInputSchema: z.ZodType<Prisma.WorkspaceUncheckedCreateWithoutOwnerInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  members: z.lazy(() => WorkspaceMemberUncheckedCreateNestedManyWithoutWorkspaceInputSchema).optional(),
  workspaceInvitations: z.lazy(() => WorkspaceInvitationUncheckedCreateNestedManyWithoutWorkspaceInputSchema).optional()
}).strict();

export default WorkspaceUncheckedCreateWithoutOwnerInputSchema;
