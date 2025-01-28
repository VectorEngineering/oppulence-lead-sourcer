import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const LeadCreateWithoutEndpointInputSchema: z.ZodType<Prisma.LeadCreateWithoutEndpointInput> = z.object({
  id: z.string().cuid().optional(),
  data: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date()
}).strict();

export default LeadCreateWithoutEndpointInputSchema;
