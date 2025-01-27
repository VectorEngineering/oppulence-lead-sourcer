import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"

export const DocumentSelectSchema: z.ZodType<Prisma.DocumentSelect> = z.object({
  id: z.boolean().optional(),
  body: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  metadata: z.boolean().optional(),
  name: z.boolean().optional(),
  objectId: z.boolean().optional(),
  ownerId: z.boolean().optional(),
  parentId: z.boolean().optional(),
  pathTokens: z.boolean().optional(),
  tag: z.boolean().optional(),
  projectId: z.boolean().optional(),
  title: z.boolean().optional(),
  owner: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
}).strict()

export default DocumentSelectSchema;
