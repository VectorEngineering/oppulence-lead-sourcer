import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { TransactionCreateNestedManyWithoutCategoryInputSchema } from './TransactionCreateNestedManyWithoutCategoryInputSchema';
import { TransactionCategoryCreateNestedOneWithoutChildrenInputSchema } from './TransactionCategoryCreateNestedOneWithoutChildrenInputSchema';
import { TransactionCategoryCreateNestedManyWithoutParentInputSchema } from './TransactionCategoryCreateNestedManyWithoutParentInputSchema';

export const TransactionCategoryCreateWithoutProjectInputSchema: z.ZodType<Prisma.TransactionCategoryCreateWithoutProjectInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  slug: z.string(),
  description: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  icon: z.string().optional().nullable(),
  path: z.string().optional().nullable(),
  level: z.number().int().optional(),
  isSystem: z.boolean().optional(),
  isActive: z.boolean().optional(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  budgetLimit: z.number().optional().nullable(),
  warningThreshold: z.number().optional().nullable(),
  trackingEnabled: z.boolean().optional(),
  vatRate: z.number().optional().nullable(),
  taxCode: z.string().optional().nullable(),
  taxDeductible: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  transactions: z.lazy(() => TransactionCreateNestedManyWithoutCategoryInputSchema).optional(),
  parent: z.lazy(() => TransactionCategoryCreateNestedOneWithoutChildrenInputSchema).optional(),
  children: z.lazy(() => TransactionCategoryCreateNestedManyWithoutParentInputSchema).optional()
}).strict();

export default TransactionCategoryCreateWithoutProjectInputSchema;
