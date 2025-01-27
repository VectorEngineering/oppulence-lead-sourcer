import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectUsersWhereInputSchema } from '../inputTypeSchemas/ProjectUsersWhereInputSchema'
import { ProjectUsersOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProjectUsersOrderByWithRelationInputSchema'
import { ProjectUsersWhereUniqueInputSchema } from '../inputTypeSchemas/ProjectUsersWhereUniqueInputSchema'

export const ProjectUsersAggregateArgsSchema: z.ZodType<Prisma.ProjectUsersAggregateArgs> = z.object({
  where: ProjectUsersWhereInputSchema.optional(),
  orderBy: z.union([ ProjectUsersOrderByWithRelationInputSchema.array(),ProjectUsersOrderByWithRelationInputSchema ]).optional(),
  cursor: ProjectUsersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ProjectUsersAggregateArgsSchema;
