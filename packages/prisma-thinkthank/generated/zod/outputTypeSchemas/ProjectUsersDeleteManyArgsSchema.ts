import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectUsersWhereInputSchema } from '../inputTypeSchemas/ProjectUsersWhereInputSchema'

export const ProjectUsersDeleteManyArgsSchema: z.ZodType<Prisma.ProjectUsersDeleteManyArgs> = z.object({
  where: ProjectUsersWhereInputSchema.optional(),
}).strict() ;

export default ProjectUsersDeleteManyArgsSchema;
