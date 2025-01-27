import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { LinkTagUncheckedCreateNestedManyWithoutTagInputSchema } from './LinkTagUncheckedCreateNestedManyWithoutTagInputSchema';
import { LeadUncheckedCreateNestedManyWithoutTagsInputSchema } from './LeadUncheckedCreateNestedManyWithoutTagsInputSchema';

export const TagUncheckedCreateWithoutCustomerTagInputSchema: z.ZodType<Prisma.TagUncheckedCreateWithoutCustomerTagInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  color: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  projectId: z.string(),
  context: z.string().optional().nullable(),
  confidence: z.number().optional().nullable(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  links: z.lazy(() => LinkTagUncheckedCreateNestedManyWithoutTagInputSchema).optional(),
  Lead: z.lazy(() => LeadUncheckedCreateNestedManyWithoutTagsInputSchema).optional()
}).strict();

export default TagUncheckedCreateWithoutCustomerTagInputSchema;
