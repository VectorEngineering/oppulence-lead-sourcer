import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookLogWhereInputSchema } from './WebhookLogWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { WebhookRelationFilterSchema } from './WebhookRelationFilterSchema';
import { WebhookWhereInputSchema } from './WebhookWhereInputSchema';

export const WebhookLogWhereUniqueInputSchema: z.ZodType<Prisma.WebhookLogWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => WebhookLogWhereInputSchema),z.lazy(() => WebhookLogWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WebhookLogWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WebhookLogWhereInputSchema),z.lazy(() => WebhookLogWhereInputSchema).array() ]).optional(),
  webhookId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  requestBody: z.lazy(() => JsonNullableFilterSchema).optional(),
  responseBody: z.lazy(() => JsonNullableFilterSchema).optional(),
  statusCode: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  duration: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  success: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  errorMessage: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  timestamp: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  webhook: z.union([ z.lazy(() => WebhookRelationFilterSchema),z.lazy(() => WebhookWhereInputSchema) ]).optional(),
}).strict());

export default WebhookLogWhereUniqueInputSchema;
