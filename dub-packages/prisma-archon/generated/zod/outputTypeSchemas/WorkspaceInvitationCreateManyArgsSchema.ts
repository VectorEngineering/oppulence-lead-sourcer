import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceInvitationCreateManyInputSchema } from '../inputTypeSchemas/WorkspaceInvitationCreateManyInputSchema'

export const WorkspaceInvitationCreateManyArgsSchema: z.ZodType<Prisma.WorkspaceInvitationCreateManyArgs> = z.object({
  data: z.union([ WorkspaceInvitationCreateManyInputSchema,WorkspaceInvitationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default WorkspaceInvitationCreateManyArgsSchema;
