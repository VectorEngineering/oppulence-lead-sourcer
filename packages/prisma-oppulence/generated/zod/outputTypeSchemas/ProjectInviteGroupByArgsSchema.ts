import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectInviteWhereInputSchema } from '../inputTypeSchemas/ProjectInviteWhereInputSchema'
import { ProjectInviteOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ProjectInviteOrderByWithAggregationInputSchema'
import { ProjectInviteScalarFieldEnumSchema } from '../inputTypeSchemas/ProjectInviteScalarFieldEnumSchema'
import { ProjectInviteScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ProjectInviteScalarWhereWithAggregatesInputSchema'

export const ProjectInviteGroupByArgsSchema: z.ZodType<Prisma.ProjectInviteGroupByArgs> = z.object({
  where: ProjectInviteWhereInputSchema.optional(),
  orderBy: z.union([ ProjectInviteOrderByWithAggregationInputSchema.array(),ProjectInviteOrderByWithAggregationInputSchema ]).optional(),
  by: ProjectInviteScalarFieldEnumSchema.array(),
  having: ProjectInviteScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ProjectInviteGroupByArgsSchema;
