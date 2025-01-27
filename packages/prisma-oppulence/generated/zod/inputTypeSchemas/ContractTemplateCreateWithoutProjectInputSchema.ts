import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const ContractTemplateCreateWithoutProjectInputSchema: z.ZodType<Prisma.ContractTemplateCreateWithoutProjectInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  category: z.string().optional().nullable(),
  type: z.string(),
  version: z.number().int().optional(),
  status: z.string().optional(),
  language: z.string().optional().nullable(),
  industry: z.string().optional().nullable(),
  content: z.string(),
  variables: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  sections: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  defaultValues: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  styling: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  layout: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  pageSettings: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  useCount: z.number().int().optional(),
  lastUsedAt: z.coerce.date().optional().nullable(),
  isPublic: z.boolean().optional(),
  reviewRequired: z.boolean().optional(),
  approvalRequired: z.boolean().optional(),
  fileUrl: z.string().optional().nullable(),
  previewUrl: z.string().optional().nullable(),
  thumbnailUrl: z.string().optional().nullable(),
  accessLevel: z.string().optional(),
  permissions: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  validationRules: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  requiredFields: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  createdBy: z.string().optional().nullable(),
  updatedBy: z.string().optional().nullable(),
  archivedAt: z.coerce.date().optional().nullable()
}).strict();

export default ContractTemplateCreateWithoutProjectInputSchema;
