import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TransactionCategoryIncludeSchema } from '../inputTypeSchemas/TransactionCategoryIncludeSchema'
import { TransactionCategoryWhereUniqueInputSchema } from '../inputTypeSchemas/TransactionCategoryWhereUniqueInputSchema'
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"
import { TransactionFindManyArgsSchema } from "../outputTypeSchemas/TransactionFindManyArgsSchema"
import { TransactionCategoryArgsSchema } from "../outputTypeSchemas/TransactionCategoryArgsSchema"
import { TransactionCategoryFindManyArgsSchema } from "../outputTypeSchemas/TransactionCategoryFindManyArgsSchema"
import { TransactionCategoryCountOutputTypeArgsSchema } from "../outputTypeSchemas/TransactionCategoryCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TransactionCategorySelectSchema: z.ZodType<Prisma.TransactionCategorySelect> = z.object({
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
  transactions: z.union([z.boolean(),z.lazy(() => TransactionFindManyArgsSchema)]).optional(),
  parent: z.union([z.boolean(),z.lazy(() => TransactionCategoryArgsSchema)]).optional(),
  children: z.union([z.boolean(),z.lazy(() => TransactionCategoryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TransactionCategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TransactionCategoryFindUniqueArgsSchema: z.ZodType<Prisma.TransactionCategoryFindUniqueArgs> = z.object({
  select: TransactionCategorySelectSchema.optional(),
  include: TransactionCategoryIncludeSchema.optional(),
  where: TransactionCategoryWhereUniqueInputSchema,
}).strict() ;

export default TransactionCategoryFindUniqueArgsSchema;
