import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationPreferenceWhereInputSchema } from './NotificationPreferenceWhereInputSchema';

export const NotificationPreferenceNullableRelationFilterSchema: z.ZodType<Prisma.NotificationPreferenceNullableRelationFilter> = z.object({
  is: z.lazy(() => NotificationPreferenceWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => NotificationPreferenceWhereInputSchema).optional().nullable()
}).strict();

export default NotificationPreferenceNullableRelationFilterSchema;
