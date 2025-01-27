import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceInvitationUpdateManyMutationInputSchema } from '../inputTypeSchemas/WorkspaceInvitationUpdateManyMutationInputSchema'
import { WorkspaceInvitationUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/WorkspaceInvitationUncheckedUpdateManyInputSchema'
import { WorkspaceInvitationWhereInputSchema } from '../inputTypeSchemas/WorkspaceInvitationWhereInputSchema'

export const WorkspaceInvitationUpdateManyArgsSchema: z.ZodType<Prisma.WorkspaceInvitationUpdateManyArgs> = z.object({
  data: z.union([ WorkspaceInvitationUpdateManyMutationInputSchema,WorkspaceInvitationUncheckedUpdateManyInputSchema ]),
  where: WorkspaceInvitationWhereInputSchema.optional(),
}).strict() ;

export default WorkspaceInvitationUpdateManyArgsSchema;
