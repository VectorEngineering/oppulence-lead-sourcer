import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"
import { LeadFindManyArgsSchema } from "../outputTypeSchemas/LeadFindManyArgsSchema"
import { LeadCategoryCountOutputTypeArgsSchema } from "../outputTypeSchemas/LeadCategoryCountOutputTypeArgsSchema"

export const LeadCategorySelectSchema: z.ZodType<Prisma.LeadCategorySelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  slug: z.boolean().optional(),
  description: z.boolean().optional(),
  color: z.boolean().optional(),
  icon: z.boolean().optional(),
  parentId: z.boolean().optional(),
  path: z.boolean().optional(),
  level: z.boolean().optional(),
  isSystem: z.boolean().optional(),
  isActive: z.boolean().optional(),
  metadata: z.boolean().optional(),
  projectId: z.boolean().optional(),
  budgetLimit: z.boolean().optional(),
  warningThreshold: z.boolean().optional(),
  trackingEnabled: z.boolean().optional(),
  vatRate: z.boolean().optional(),
  taxCode: z.boolean().optional(),
  taxDeductible: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
  leads: z.union([z.boolean(),z.lazy(() => LeadFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => LeadCategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default LeadCategorySelectSchema;
