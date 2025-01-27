import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { LinkUpdateOneRequiredWithoutTagsNestedInputSchema } from './LinkUpdateOneRequiredWithoutTagsNestedInputSchema';

export const LinkTagUpdateWithoutTagInputSchema: z.ZodType<Prisma.LinkTagUpdateWithoutTagInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  link: z.lazy(() => LinkUpdateOneRequiredWithoutTagsNestedInputSchema).optional()
}).strict();

export default LinkTagUpdateWithoutTagInputSchema;
