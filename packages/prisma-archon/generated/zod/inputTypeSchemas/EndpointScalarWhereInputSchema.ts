import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const EndpointScalarWhereInputSchema: z.ZodType<Prisma.EndpointScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EndpointScalarWhereInputSchema),z.lazy(() => EndpointScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EndpointScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EndpointScalarWhereInputSchema),z.lazy(() => EndpointScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  schema: z.lazy(() => JsonFilterSchema).optional(),
  enabled: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  webhookEnabled: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  emailNotify: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  webhook: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  formEnabled: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  successUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  failUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default EndpointScalarWhereInputSchema;
