import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NotificationPreferenceWhereInputSchema } from '../inputTypeSchemas/NotificationPreferenceWhereInputSchema'

export const NotificationPreferenceDeleteManyArgsSchema: z.ZodType<Prisma.NotificationPreferenceDeleteManyArgs> = z.object({
  where: NotificationPreferenceWhereInputSchema.optional(),
}).strict() ;

export default NotificationPreferenceDeleteManyArgsSchema;
