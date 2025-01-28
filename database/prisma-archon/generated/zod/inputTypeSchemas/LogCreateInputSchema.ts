import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LogTypeSchema } from './LogTypeSchema';
import { LogPostTypeSchema } from './LogPostTypeSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { EndpointCreateNestedOneWithoutLogsInputSchema } from './EndpointCreateNestedOneWithoutLogsInputSchema';

export const LogCreateInputSchema: z.ZodType<Prisma.LogCreateInput> = z.object({
  id: z.string().cuid().optional(),
  type: z.lazy(() => LogTypeSchema).optional().nullable(),
  postType: z.lazy(() => LogPostTypeSchema).optional().nullable(),
  message: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  createdAt: z.coerce.date(),
  endpoint: z.lazy(() => EndpointCreateNestedOneWithoutLogsInputSchema)
}).strict();

export default LogCreateInputSchema;
