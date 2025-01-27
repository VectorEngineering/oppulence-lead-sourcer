import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceMemberIncludeSchema } from '../inputTypeSchemas/WorkspaceMemberIncludeSchema'
import { WorkspaceMemberWhereInputSchema } from '../inputTypeSchemas/WorkspaceMemberWhereInputSchema'
import { WorkspaceMemberOrderByWithRelationInputSchema } from '../inputTypeSchemas/WorkspaceMemberOrderByWithRelationInputSchema'
import { WorkspaceMemberWhereUniqueInputSchema } from '../inputTypeSchemas/WorkspaceMemberWhereUniqueInputSchema'
import { WorkspaceMemberScalarFieldEnumSchema } from '../inputTypeSchemas/WorkspaceMemberScalarFieldEnumSchema'
import { WorkspaceArgsSchema } from "../outputTypeSchemas/WorkspaceArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WorkspaceMemberSelectSchema: z.ZodType<Prisma.WorkspaceMemberSelect> = z.object({
  id: z.boolean().optional(),
  workspaceId: z.boolean().optional(),
  userId: z.boolean().optional(),
  role: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  workspace: z.union([z.boolean(),z.lazy(() => WorkspaceArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const WorkspaceMemberFindFirstOrThrowArgsSchema: z.ZodType<Prisma.WorkspaceMemberFindFirstOrThrowArgs> = z.object({
  select: WorkspaceMemberSelectSchema.optional(),
  include: WorkspaceMemberIncludeSchema.optional(),
  where: WorkspaceMemberWhereInputSchema.optional(),
  orderBy: z.union([ WorkspaceMemberOrderByWithRelationInputSchema.array(),WorkspaceMemberOrderByWithRelationInputSchema ]).optional(),
  cursor: WorkspaceMemberWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ WorkspaceMemberScalarFieldEnumSchema,WorkspaceMemberScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default WorkspaceMemberFindFirstOrThrowArgsSchema;
