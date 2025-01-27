import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectInviteIncludeSchema } from '../inputTypeSchemas/ProjectInviteIncludeSchema'
import { ProjectInviteWhereUniqueInputSchema } from '../inputTypeSchemas/ProjectInviteWhereUniqueInputSchema'
import { ProjectInviteCreateInputSchema } from '../inputTypeSchemas/ProjectInviteCreateInputSchema'
import { ProjectInviteUncheckedCreateInputSchema } from '../inputTypeSchemas/ProjectInviteUncheckedCreateInputSchema'
import { ProjectInviteUpdateInputSchema } from '../inputTypeSchemas/ProjectInviteUpdateInputSchema'
import { ProjectInviteUncheckedUpdateInputSchema } from '../inputTypeSchemas/ProjectInviteUncheckedUpdateInputSchema'
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProjectInviteSelectSchema: z.ZodType<Prisma.ProjectInviteSelect> = z.object({
  email: z.boolean().optional(),
  expires: z.boolean().optional(),
  projectId: z.boolean().optional(),
  role: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
}).strict()

export const ProjectInviteUpsertArgsSchema: z.ZodType<Prisma.ProjectInviteUpsertArgs> = z.object({
  select: ProjectInviteSelectSchema.optional(),
  include: ProjectInviteIncludeSchema.optional(),
  where: ProjectInviteWhereUniqueInputSchema,
  create: z.union([ ProjectInviteCreateInputSchema,ProjectInviteUncheckedCreateInputSchema ]),
  update: z.union([ ProjectInviteUpdateInputSchema,ProjectInviteUncheckedUpdateInputSchema ]),
}).strict() ;

export default ProjectInviteUpsertArgsSchema;
