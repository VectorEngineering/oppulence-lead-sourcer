import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"
import { DealFindManyArgsSchema } from "../outputTypeSchemas/DealFindManyArgsSchema"
import { LeadFindManyArgsSchema } from "../outputTypeSchemas/LeadFindManyArgsSchema"
import { DocumentCountOutputTypeArgsSchema } from "../outputTypeSchemas/DocumentCountOutputTypeArgsSchema"

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
  description: z.boolean().optional(),
  type: z.boolean().optional(),
  url: z.boolean().optional(),
  size: z.boolean().optional(),
  mimeType: z.boolean().optional(),
  isConfidential: z.boolean().optional(),
  documentType: z.boolean().optional(),
  version: z.boolean().optional(),
  status: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  expiryDate: z.boolean().optional(),
  shareableLink: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  owner: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
  Deal: z.union([z.boolean(),z.lazy(() => DealFindManyArgsSchema)]).optional(),
  Lead: z.union([z.boolean(),z.lazy(() => LeadFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => DocumentCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default DocumentSelectSchema;
