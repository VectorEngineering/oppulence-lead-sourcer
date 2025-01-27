import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EndpointWhereInputSchema } from './EndpointWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { LeadListRelationFilterSchema } from './LeadListRelationFilterSchema';
import { LogListRelationFilterSchema } from './LogListRelationFilterSchema';

export const EndpointWhereUniqueInputSchema: z.ZodType<Prisma.EndpointWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => EndpointWhereInputSchema),z.lazy(() => EndpointWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EndpointWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EndpointWhereInputSchema),z.lazy(() => EndpointWhereInputSchema).array() ]).optional(),
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
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  leads: z.lazy(() => LeadListRelationFilterSchema).optional(),
  logs: z.lazy(() => LogListRelationFilterSchema).optional()
}).strict());

export default EndpointWhereUniqueInputSchema;
