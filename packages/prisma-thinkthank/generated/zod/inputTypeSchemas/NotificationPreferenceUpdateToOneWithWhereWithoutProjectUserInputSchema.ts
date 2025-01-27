import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationPreferenceWhereInputSchema } from './NotificationPreferenceWhereInputSchema';
import { NotificationPreferenceUpdateWithoutProjectUserInputSchema } from './NotificationPreferenceUpdateWithoutProjectUserInputSchema';
import { NotificationPreferenceUncheckedUpdateWithoutProjectUserInputSchema } from './NotificationPreferenceUncheckedUpdateWithoutProjectUserInputSchema';

export const NotificationPreferenceUpdateToOneWithWhereWithoutProjectUserInputSchema: z.ZodType<Prisma.NotificationPreferenceUpdateToOneWithWhereWithoutProjectUserInput> = z.object({
  where: z.lazy(() => NotificationPreferenceWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => NotificationPreferenceUpdateWithoutProjectUserInputSchema),z.lazy(() => NotificationPreferenceUncheckedUpdateWithoutProjectUserInputSchema) ]),
}).strict();

export default NotificationPreferenceUpdateToOneWithWhereWithoutProjectUserInputSchema;
