import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { LinkTagUncheckedUpdateManyWithoutTagNestedInputSchema } from './LinkTagUncheckedUpdateManyWithoutTagNestedInputSchema';
import { CustomerTagUncheckedUpdateManyWithoutTagNestedInputSchema } from './CustomerTagUncheckedUpdateManyWithoutTagNestedInputSchema';
import { TransactionUncheckedUpdateManyWithoutTagsNestedInputSchema } from './TransactionUncheckedUpdateManyWithoutTagsNestedInputSchema';
import { BankAccountUncheckedUpdateManyWithoutTagsNestedInputSchema } from './BankAccountUncheckedUpdateManyWithoutTagsNestedInputSchema';

export const TagUncheckedUpdateWithoutProjectInputSchema: z.ZodType<Prisma.TagUncheckedUpdateWithoutProjectInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  color: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  context: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  confidence: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  links: z.lazy(() => LinkTagUncheckedUpdateManyWithoutTagNestedInputSchema).optional(),
  CustomerTag: z.lazy(() => CustomerTagUncheckedUpdateManyWithoutTagNestedInputSchema).optional(),
  Transaction: z.lazy(() => TransactionUncheckedUpdateManyWithoutTagsNestedInputSchema).optional(),
  BankAccount: z.lazy(() => BankAccountUncheckedUpdateManyWithoutTagsNestedInputSchema).optional()
}).strict();

export default TagUncheckedUpdateWithoutProjectInputSchema;
