import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { EndpointCreateNestedOneWithoutLeadsInputSchema } from './EndpointCreateNestedOneWithoutLeadsInputSchema';

export const LeadCreateInputSchema: z.ZodType<Prisma.LeadCreateInput> = z.object({
  id: z.string().cuid().optional(),
  data: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  endpoint: z.lazy(() => EndpointCreateNestedOneWithoutLeadsInputSchema)
}).strict();

export default LeadCreateInputSchema;
