import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceInvitationScalarWhereInputSchema } from './WorkspaceInvitationScalarWhereInputSchema';
import { WorkspaceInvitationUpdateManyMutationInputSchema } from './WorkspaceInvitationUpdateManyMutationInputSchema';
import { WorkspaceInvitationUncheckedUpdateManyWithoutWorkspaceInputSchema } from './WorkspaceInvitationUncheckedUpdateManyWithoutWorkspaceInputSchema';

export const WorkspaceInvitationUpdateManyWithWhereWithoutWorkspaceInputSchema: z.ZodType<Prisma.WorkspaceInvitationUpdateManyWithWhereWithoutWorkspaceInput> = z.object({
  where: z.lazy(() => WorkspaceInvitationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => WorkspaceInvitationUpdateManyMutationInputSchema),z.lazy(() => WorkspaceInvitationUncheckedUpdateManyWithoutWorkspaceInputSchema) ]),
}).strict();

export default WorkspaceInvitationUpdateManyWithWhereWithoutWorkspaceInputSchema;
