import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectUsersUpdateManyMutationInputSchema } from '../inputTypeSchemas/ProjectUsersUpdateManyMutationInputSchema'
import { ProjectUsersUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ProjectUsersUncheckedUpdateManyInputSchema'
import { ProjectUsersWhereInputSchema } from '../inputTypeSchemas/ProjectUsersWhereInputSchema'

export const ProjectUsersUpdateManyArgsSchema: z.ZodType<Prisma.ProjectUsersUpdateManyArgs> = z.object({
  data: z.union([ ProjectUsersUpdateManyMutationInputSchema,ProjectUsersUncheckedUpdateManyInputSchema ]),
  where: ProjectUsersWhereInputSchema.optional(),
}).strict() ;

export default ProjectUsersUpdateManyArgsSchema;
