import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceInvitationSelectSchema } from '../inputTypeSchemas/WorkspaceInvitationSelectSchema';
import { WorkspaceInvitationIncludeSchema } from '../inputTypeSchemas/WorkspaceInvitationIncludeSchema';

export const WorkspaceInvitationArgsSchema: z.ZodType<Prisma.WorkspaceInvitationDefaultArgs> = z.object({
  select: z.lazy(() => WorkspaceInvitationSelectSchema).optional(),
  include: z.lazy(() => WorkspaceInvitationIncludeSchema).optional(),
}).strict();

export default WorkspaceInvitationArgsSchema;
