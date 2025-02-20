import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SentEmailIncludeSchema } from '../inputTypeSchemas/SentEmailIncludeSchema'
import { SentEmailWhereInputSchema } from '../inputTypeSchemas/SentEmailWhereInputSchema'
import { SentEmailOrderByWithRelationInputSchema } from '../inputTypeSchemas/SentEmailOrderByWithRelationInputSchema'
import { SentEmailWhereUniqueInputSchema } from '../inputTypeSchemas/SentEmailWhereUniqueInputSchema'
import { SentEmailScalarFieldEnumSchema } from '../inputTypeSchemas/SentEmailScalarFieldEnumSchema'
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SentEmailSelectSchema: z.ZodType<Prisma.SentEmailSelect> = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  projectId: z.boolean().optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
}).strict()

export const SentEmailFindFirstArgsSchema: z.ZodType<Prisma.SentEmailFindFirstArgs> = z.object({
  select: SentEmailSelectSchema.optional(),
  include: SentEmailIncludeSchema.optional(),
  where: SentEmailWhereInputSchema.optional(),
  orderBy: z.union([ SentEmailOrderByWithRelationInputSchema.array(),SentEmailOrderByWithRelationInputSchema ]).optional(),
  cursor: SentEmailWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SentEmailScalarFieldEnumSchema,SentEmailScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default SentEmailFindFirstArgsSchema;
