import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceInvitationWhereUniqueInputSchema } from './WorkspaceInvitationWhereUniqueInputSchema';
import { WorkspaceInvitationUpdateWithoutWorkspaceInputSchema } from './WorkspaceInvitationUpdateWithoutWorkspaceInputSchema';
import { WorkspaceInvitationUncheckedUpdateWithoutWorkspaceInputSchema } from './WorkspaceInvitationUncheckedUpdateWithoutWorkspaceInputSchema';

export const WorkspaceInvitationUpdateWithWhereUniqueWithoutWorkspaceInputSchema: z.ZodType<Prisma.WorkspaceInvitationUpdateWithWhereUniqueWithoutWorkspaceInput> = z.object({
  where: z.lazy(() => WorkspaceInvitationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => WorkspaceInvitationUpdateWithoutWorkspaceInputSchema),z.lazy(() => WorkspaceInvitationUncheckedUpdateWithoutWorkspaceInputSchema) ]),
}).strict();

export default WorkspaceInvitationUpdateWithWhereUniqueWithoutWorkspaceInputSchema;
