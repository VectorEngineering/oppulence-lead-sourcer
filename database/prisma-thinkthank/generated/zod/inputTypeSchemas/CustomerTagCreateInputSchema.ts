import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerCreateNestedOneWithoutCustomerTagsInputSchema } from './CustomerCreateNestedOneWithoutCustomerTagsInputSchema';
import { TagCreateNestedOneWithoutCustomerTagInputSchema } from './TagCreateNestedOneWithoutCustomerTagInputSchema';
import { ProjectCreateNestedOneWithoutCustomerTagInputSchema } from './ProjectCreateNestedOneWithoutCustomerTagInputSchema';

export const CustomerTagCreateInputSchema: z.ZodType<Prisma.CustomerTagCreateInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  customer: z.lazy(() => CustomerCreateNestedOneWithoutCustomerTagsInputSchema),
  tag: z.lazy(() => TagCreateNestedOneWithoutCustomerTagInputSchema),
  project: z.lazy(() => ProjectCreateNestedOneWithoutCustomerTagInputSchema)
}).strict();

export default CustomerTagCreateInputSchema;
