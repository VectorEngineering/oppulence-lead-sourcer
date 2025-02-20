import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SentEmailIncludeSchema } from '../inputTypeSchemas/SentEmailIncludeSchema'
import { SentEmailWhereUniqueInputSchema } from '../inputTypeSchemas/SentEmailWhereUniqueInputSchema'
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

export const SentEmailDeleteArgsSchema: z.ZodType<Prisma.SentEmailDeleteArgs> = z.object({
  select: SentEmailSelectSchema.optional(),
  include: SentEmailIncludeSchema.optional(),
  where: SentEmailWhereUniqueInputSchema,
}).strict() ;

export default SentEmailDeleteArgsSchema;
