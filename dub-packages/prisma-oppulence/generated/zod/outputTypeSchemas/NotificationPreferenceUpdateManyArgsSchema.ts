import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NotificationPreferenceUpdateManyMutationInputSchema } from '../inputTypeSchemas/NotificationPreferenceUpdateManyMutationInputSchema'
import { NotificationPreferenceUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/NotificationPreferenceUncheckedUpdateManyInputSchema'
import { NotificationPreferenceWhereInputSchema } from '../inputTypeSchemas/NotificationPreferenceWhereInputSchema'

export const NotificationPreferenceUpdateManyArgsSchema: z.ZodType<Prisma.NotificationPreferenceUpdateManyArgs> = z.object({
  data: z.union([ NotificationPreferenceUpdateManyMutationInputSchema,NotificationPreferenceUncheckedUpdateManyInputSchema ]),
  where: NotificationPreferenceWhereInputSchema.optional(),
}).strict() ;

export default NotificationPreferenceUpdateManyArgsSchema;
