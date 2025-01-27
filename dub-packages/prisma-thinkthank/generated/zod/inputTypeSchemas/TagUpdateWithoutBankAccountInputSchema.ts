import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { ProjectUpdateOneRequiredWithoutTagsNestedInputSchema } from './ProjectUpdateOneRequiredWithoutTagsNestedInputSchema';
import { LinkTagUpdateManyWithoutTagNestedInputSchema } from './LinkTagUpdateManyWithoutTagNestedInputSchema';
import { CustomerTagUpdateManyWithoutTagNestedInputSchema } from './CustomerTagUpdateManyWithoutTagNestedInputSchema';
import { TransactionUpdateManyWithoutTagsNestedInputSchema } from './TransactionUpdateManyWithoutTagsNestedInputSchema';

export const TagUpdateWithoutBankAccountInputSchema: z.ZodType<Prisma.TagUpdateWithoutBankAccountInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  color: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  context: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  confidence: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  project: z.lazy(() => ProjectUpdateOneRequiredWithoutTagsNestedInputSchema).optional(),
  links: z.lazy(() => LinkTagUpdateManyWithoutTagNestedInputSchema).optional(),
  CustomerTag: z.lazy(() => CustomerTagUpdateManyWithoutTagNestedInputSchema).optional(),
  Transaction: z.lazy(() => TransactionUpdateManyWithoutTagsNestedInputSchema).optional()
}).strict();

export default TagUpdateWithoutBankAccountInputSchema;
