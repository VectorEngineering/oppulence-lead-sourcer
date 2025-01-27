import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceInvitationIncludeSchema } from '../inputTypeSchemas/WorkspaceInvitationIncludeSchema'
import { WorkspaceInvitationWhereInputSchema } from '../inputTypeSchemas/WorkspaceInvitationWhereInputSchema'
import { WorkspaceInvitationOrderByWithRelationInputSchema } from '../inputTypeSchemas/WorkspaceInvitationOrderByWithRelationInputSchema'
import { WorkspaceInvitationWhereUniqueInputSchema } from '../inputTypeSchemas/WorkspaceInvitationWhereUniqueInputSchema'
import { WorkspaceInvitationScalarFieldEnumSchema } from '../inputTypeSchemas/WorkspaceInvitationScalarFieldEnumSchema'
import { WorkspaceArgsSchema } from "./WorkspaceArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WorkspaceInvitationSelectSchema: z.ZodType<Prisma.WorkspaceInvitationSelect> = z.object({
  id: z.boolean().optional(),
  workspaceId: z.boolean().optional(),
  email: z.boolean().optional(),
  token: z.boolean().optional(),
  status: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  workspace: z.union([z.boolean(),z.lazy(() => WorkspaceArgsSchema)]).optional(),
}).strict()

export const WorkspaceInvitationFindManyArgsSchema: z.ZodType<Prisma.WorkspaceInvitationFindManyArgs> = z.object({
  select: WorkspaceInvitationSelectSchema.optional(),
  include: WorkspaceInvitationIncludeSchema.optional(),
  where: WorkspaceInvitationWhereInputSchema.optional(),
  orderBy: z.union([ WorkspaceInvitationOrderByWithRelationInputSchema.array(),WorkspaceInvitationOrderByWithRelationInputSchema ]).optional(),
  cursor: WorkspaceInvitationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ WorkspaceInvitationScalarFieldEnumSchema,WorkspaceInvitationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default WorkspaceInvitationFindManyArgsSchema;
