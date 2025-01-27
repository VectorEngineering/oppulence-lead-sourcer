import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationPreferenceCreateWithoutProjectUserInputSchema } from './NotificationPreferenceCreateWithoutProjectUserInputSchema';
import { NotificationPreferenceUncheckedCreateWithoutProjectUserInputSchema } from './NotificationPreferenceUncheckedCreateWithoutProjectUserInputSchema';
import { NotificationPreferenceCreateOrConnectWithoutProjectUserInputSchema } from './NotificationPreferenceCreateOrConnectWithoutProjectUserInputSchema';
import { NotificationPreferenceWhereUniqueInputSchema } from './NotificationPreferenceWhereUniqueInputSchema';

export const NotificationPreferenceCreateNestedOneWithoutProjectUserInputSchema: z.ZodType<Prisma.NotificationPreferenceCreateNestedOneWithoutProjectUserInput> = z.object({
  create: z.union([ z.lazy(() => NotificationPreferenceCreateWithoutProjectUserInputSchema),z.lazy(() => NotificationPreferenceUncheckedCreateWithoutProjectUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => NotificationPreferenceCreateOrConnectWithoutProjectUserInputSchema).optional(),
  connect: z.lazy(() => NotificationPreferenceWhereUniqueInputSchema).optional()
}).strict();

export default NotificationPreferenceCreateNestedOneWithoutProjectUserInputSchema;
