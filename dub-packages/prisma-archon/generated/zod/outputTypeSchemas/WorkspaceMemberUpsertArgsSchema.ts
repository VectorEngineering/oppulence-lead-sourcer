import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceMemberIncludeSchema } from '../inputTypeSchemas/WorkspaceMemberIncludeSchema'
import { WorkspaceMemberWhereUniqueInputSchema } from '../inputTypeSchemas/WorkspaceMemberWhereUniqueInputSchema'
import { WorkspaceMemberCreateInputSchema } from '../inputTypeSchemas/WorkspaceMemberCreateInputSchema'
import { WorkspaceMemberUncheckedCreateInputSchema } from '../inputTypeSchemas/WorkspaceMemberUncheckedCreateInputSchema'
import { WorkspaceMemberUpdateInputSchema } from '../inputTypeSchemas/WorkspaceMemberUpdateInputSchema'
import { WorkspaceMemberUncheckedUpdateInputSchema } from '../inputTypeSchemas/WorkspaceMemberUncheckedUpdateInputSchema'
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

export const WorkspaceMemberUpsertArgsSchema: z.ZodType<Prisma.WorkspaceMemberUpsertArgs> = z.object({
  select: WorkspaceMemberSelectSchema.optional(),
  include: WorkspaceMemberIncludeSchema.optional(),
  where: WorkspaceMemberWhereUniqueInputSchema,
  create: z.union([ WorkspaceMemberCreateInputSchema,WorkspaceMemberUncheckedCreateInputSchema ]),
  update: z.union([ WorkspaceMemberUpdateInputSchema,WorkspaceMemberUncheckedUpdateInputSchema ]),
}).strict() ;

export default WorkspaceMemberUpsertArgsSchema;
