import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectUsersUpdateWithoutNotificationPreferenceInputSchema } from './ProjectUsersUpdateWithoutNotificationPreferenceInputSchema';
import { ProjectUsersUncheckedUpdateWithoutNotificationPreferenceInputSchema } from './ProjectUsersUncheckedUpdateWithoutNotificationPreferenceInputSchema';
import { ProjectUsersCreateWithoutNotificationPreferenceInputSchema } from './ProjectUsersCreateWithoutNotificationPreferenceInputSchema';
import { ProjectUsersUncheckedCreateWithoutNotificationPreferenceInputSchema } from './ProjectUsersUncheckedCreateWithoutNotificationPreferenceInputSchema';
import { ProjectUsersWhereInputSchema } from './ProjectUsersWhereInputSchema';

export const ProjectUsersUpsertWithoutNotificationPreferenceInputSchema: z.ZodType<Prisma.ProjectUsersUpsertWithoutNotificationPreferenceInput> = z.object({
  update: z.union([ z.lazy(() => ProjectUsersUpdateWithoutNotificationPreferenceInputSchema),z.lazy(() => ProjectUsersUncheckedUpdateWithoutNotificationPreferenceInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectUsersCreateWithoutNotificationPreferenceInputSchema),z.lazy(() => ProjectUsersUncheckedCreateWithoutNotificationPreferenceInputSchema) ]),
  where: z.lazy(() => ProjectUsersWhereInputSchema).optional()
}).strict();

export default ProjectUsersUpsertWithoutNotificationPreferenceInputSchema;
