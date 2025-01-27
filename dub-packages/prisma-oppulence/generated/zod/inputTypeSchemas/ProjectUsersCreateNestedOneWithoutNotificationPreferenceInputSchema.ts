import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectUsersCreateWithoutNotificationPreferenceInputSchema } from './ProjectUsersCreateWithoutNotificationPreferenceInputSchema';
import { ProjectUsersUncheckedCreateWithoutNotificationPreferenceInputSchema } from './ProjectUsersUncheckedCreateWithoutNotificationPreferenceInputSchema';
import { ProjectUsersCreateOrConnectWithoutNotificationPreferenceInputSchema } from './ProjectUsersCreateOrConnectWithoutNotificationPreferenceInputSchema';
import { ProjectUsersWhereUniqueInputSchema } from './ProjectUsersWhereUniqueInputSchema';

export const ProjectUsersCreateNestedOneWithoutNotificationPreferenceInputSchema: z.ZodType<Prisma.ProjectUsersCreateNestedOneWithoutNotificationPreferenceInput> = z.object({
  create: z.union([ z.lazy(() => ProjectUsersCreateWithoutNotificationPreferenceInputSchema),z.lazy(() => ProjectUsersUncheckedCreateWithoutNotificationPreferenceInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectUsersCreateOrConnectWithoutNotificationPreferenceInputSchema).optional(),
  connect: z.lazy(() => ProjectUsersWhereUniqueInputSchema).optional()
}).strict();

export default ProjectUsersCreateNestedOneWithoutNotificationPreferenceInputSchema;
