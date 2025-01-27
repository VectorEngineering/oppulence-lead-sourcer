import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceInvitationWhereInputSchema } from '../inputTypeSchemas/WorkspaceInvitationWhereInputSchema'
import { WorkspaceInvitationOrderByWithAggregationInputSchema } from '../inputTypeSchemas/WorkspaceInvitationOrderByWithAggregationInputSchema'
import { WorkspaceInvitationScalarFieldEnumSchema } from '../inputTypeSchemas/WorkspaceInvitationScalarFieldEnumSchema'
import { WorkspaceInvitationScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/WorkspaceInvitationScalarWhereWithAggregatesInputSchema'

export const WorkspaceInvitationGroupByArgsSchema: z.ZodType<Prisma.WorkspaceInvitationGroupByArgs> = z.object({
  where: WorkspaceInvitationWhereInputSchema.optional(),
  orderBy: z.union([ WorkspaceInvitationOrderByWithAggregationInputSchema.array(),WorkspaceInvitationOrderByWithAggregationInputSchema ]).optional(),
  by: WorkspaceInvitationScalarFieldEnumSchema.array(),
  having: WorkspaceInvitationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default WorkspaceInvitationGroupByArgsSchema;
