import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { LinkTagUncheckedCreateNestedManyWithoutTagInputSchema } from './LinkTagUncheckedCreateNestedManyWithoutTagInputSchema';
import { CustomerTagUncheckedCreateNestedManyWithoutTagInputSchema } from './CustomerTagUncheckedCreateNestedManyWithoutTagInputSchema';
import { TransactionUncheckedCreateNestedManyWithoutTagsInputSchema } from './TransactionUncheckedCreateNestedManyWithoutTagsInputSchema';
import { BankAccountUncheckedCreateNestedManyWithoutTagsInputSchema } from './BankAccountUncheckedCreateNestedManyWithoutTagsInputSchema';

export const TagUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.TagUncheckedCreateWithoutProjectInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  color: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  context: z.string().optional().nullable(),
  confidence: z.number().optional().nullable(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  links: z.lazy(() => LinkTagUncheckedCreateNestedManyWithoutTagInputSchema).optional(),
  CustomerTag: z.lazy(() => CustomerTagUncheckedCreateNestedManyWithoutTagInputSchema).optional(),
  Transaction: z.lazy(() => TransactionUncheckedCreateNestedManyWithoutTagsInputSchema).optional(),
  BankAccount: z.lazy(() => BankAccountUncheckedCreateNestedManyWithoutTagsInputSchema).optional()
}).strict();

export default TagUncheckedCreateWithoutProjectInputSchema;
