import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { CustomerUpdateOneRequiredWithoutCustomerTagsNestedInputSchema } from './CustomerUpdateOneRequiredWithoutCustomerTagsNestedInputSchema';
import { ProjectUpdateOneRequiredWithoutCustomerTagNestedInputSchema } from './ProjectUpdateOneRequiredWithoutCustomerTagNestedInputSchema';

export const CustomerTagUpdateWithoutTagInputSchema: z.ZodType<Prisma.CustomerTagUpdateWithoutTagInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  customer: z.lazy(() => CustomerUpdateOneRequiredWithoutCustomerTagsNestedInputSchema).optional(),
  project: z.lazy(() => ProjectUpdateOneRequiredWithoutCustomerTagNestedInputSchema).optional()
}).strict();

export default CustomerTagUpdateWithoutTagInputSchema;
