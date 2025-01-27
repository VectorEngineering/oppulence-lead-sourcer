import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceInvitationWhereInputSchema } from '../inputTypeSchemas/WorkspaceInvitationWhereInputSchema'
import { WorkspaceInvitationOrderByWithRelationInputSchema } from '../inputTypeSchemas/WorkspaceInvitationOrderByWithRelationInputSchema'
import { WorkspaceInvitationWhereUniqueInputSchema } from '../inputTypeSchemas/WorkspaceInvitationWhereUniqueInputSchema'

export const WorkspaceInvitationAggregateArgsSchema: z.ZodType<Prisma.WorkspaceInvitationAggregateArgs> = z.object({
  where: WorkspaceInvitationWhereInputSchema.optional(),
  orderBy: z.union([ WorkspaceInvitationOrderByWithRelationInputSchema.array(),WorkspaceInvitationOrderByWithRelationInputSchema ]).optional(),
  cursor: WorkspaceInvitationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default WorkspaceInvitationAggregateArgsSchema;
