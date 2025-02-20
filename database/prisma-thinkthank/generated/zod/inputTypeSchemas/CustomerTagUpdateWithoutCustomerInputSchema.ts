import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TagUpdateOneRequiredWithoutCustomerTagNestedInputSchema } from './TagUpdateOneRequiredWithoutCustomerTagNestedInputSchema';
import { ProjectUpdateOneRequiredWithoutCustomerTagNestedInputSchema } from './ProjectUpdateOneRequiredWithoutCustomerTagNestedInputSchema';

export const CustomerTagUpdateWithoutCustomerInputSchema: z.ZodType<Prisma.CustomerTagUpdateWithoutCustomerInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tag: z.lazy(() => TagUpdateOneRequiredWithoutCustomerTagNestedInputSchema).optional(),
  project: z.lazy(() => ProjectUpdateOneRequiredWithoutCustomerTagNestedInputSchema).optional()
}).strict();

export default CustomerTagUpdateWithoutCustomerInputSchema;
