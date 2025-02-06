import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { UserCreateNestedOneWithoutDocumentInputSchema } from './UserCreateNestedOneWithoutDocumentInputSchema';

export const DocumentCreateWithoutProjectInputSchema: z.ZodType<Prisma.DocumentCreateWithoutProjectInput> = z.object({
  id: z.string().cuid().optional(),
  body: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional().nullable(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  name: z.string().optional().nullable(),
  objectId: z.string().optional().nullable(),
  parentId: z.string().optional().nullable(),
  pathTokens: z.string(),
  tag: z.string().optional().nullable(),
  title: z.string().optional().nullable(),
  owner: z.lazy(() => UserCreateNestedOneWithoutDocumentInputSchema).optional()
}).strict();

export default DocumentCreateWithoutProjectInputSchema;
