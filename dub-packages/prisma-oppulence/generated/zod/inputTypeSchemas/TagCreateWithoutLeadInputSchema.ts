import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { ProjectCreateNestedOneWithoutTagsInputSchema } from './ProjectCreateNestedOneWithoutTagsInputSchema';
import { LinkTagCreateNestedManyWithoutTagInputSchema } from './LinkTagCreateNestedManyWithoutTagInputSchema';
import { CustomerTagCreateNestedManyWithoutTagInputSchema } from './CustomerTagCreateNestedManyWithoutTagInputSchema';

export const TagCreateWithoutLeadInputSchema: z.ZodType<Prisma.TagCreateWithoutLeadInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  color: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  context: z.string().optional().nullable(),
  confidence: z.number().optional().nullable(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  project: z.lazy(() => ProjectCreateNestedOneWithoutTagsInputSchema),
  links: z.lazy(() => LinkTagCreateNestedManyWithoutTagInputSchema).optional(),
  CustomerTag: z.lazy(() => CustomerTagCreateNestedManyWithoutTagInputSchema).optional()
}).strict();

export default TagCreateWithoutLeadInputSchema;
