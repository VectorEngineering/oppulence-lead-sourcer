import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SentEmailIncludeSchema } from '../inputTypeSchemas/SentEmailIncludeSchema'
import { SentEmailCreateInputSchema } from '../inputTypeSchemas/SentEmailCreateInputSchema'
import { SentEmailUncheckedCreateInputSchema } from '../inputTypeSchemas/SentEmailUncheckedCreateInputSchema'
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

export const SentEmailCreateArgsSchema: z.ZodType<Prisma.SentEmailCreateArgs> = z.object({
  select: SentEmailSelectSchema.optional(),
  include: SentEmailIncludeSchema.optional(),
  data: z.union([ SentEmailCreateInputSchema,SentEmailUncheckedCreateInputSchema ]),
}).strict() ;

export default SentEmailCreateArgsSchema;
