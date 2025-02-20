import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectInviteUpdateManyMutationInputSchema } from '../inputTypeSchemas/ProjectInviteUpdateManyMutationInputSchema'
import { ProjectInviteUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ProjectInviteUncheckedUpdateManyInputSchema'
import { ProjectInviteWhereInputSchema } from '../inputTypeSchemas/ProjectInviteWhereInputSchema'

export const ProjectInviteUpdateManyArgsSchema: z.ZodType<Prisma.ProjectInviteUpdateManyArgs> = z.object({
  data: z.union([ ProjectInviteUpdateManyMutationInputSchema,ProjectInviteUncheckedUpdateManyInputSchema ]),
  where: ProjectInviteWhereInputSchema.optional(),
}).strict() ;

export default ProjectInviteUpdateManyArgsSchema;
