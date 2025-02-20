import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateNestedOneWithoutCustomerTagInputSchema } from './TagCreateNestedOneWithoutCustomerTagInputSchema';
import { ProjectCreateNestedOneWithoutCustomerTagInputSchema } from './ProjectCreateNestedOneWithoutCustomerTagInputSchema';

export const CustomerTagCreateWithoutCustomerInputSchema: z.ZodType<Prisma.CustomerTagCreateWithoutCustomerInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  tag: z.lazy(() => TagCreateNestedOneWithoutCustomerTagInputSchema),
  project: z.lazy(() => ProjectCreateNestedOneWithoutCustomerTagInputSchema)
}).strict();

export default CustomerTagCreateWithoutCustomerInputSchema;
