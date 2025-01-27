import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectUsersCreateWithoutNotificationPreferenceInputSchema } from './ProjectUsersCreateWithoutNotificationPreferenceInputSchema';
import { ProjectUsersUncheckedCreateWithoutNotificationPreferenceInputSchema } from './ProjectUsersUncheckedCreateWithoutNotificationPreferenceInputSchema';
import { ProjectUsersCreateOrConnectWithoutNotificationPreferenceInputSchema } from './ProjectUsersCreateOrConnectWithoutNotificationPreferenceInputSchema';
import { ProjectUsersUpsertWithoutNotificationPreferenceInputSchema } from './ProjectUsersUpsertWithoutNotificationPreferenceInputSchema';
import { ProjectUsersWhereUniqueInputSchema } from './ProjectUsersWhereUniqueInputSchema';
import { ProjectUsersUpdateToOneWithWhereWithoutNotificationPreferenceInputSchema } from './ProjectUsersUpdateToOneWithWhereWithoutNotificationPreferenceInputSchema';
import { ProjectUsersUpdateWithoutNotificationPreferenceInputSchema } from './ProjectUsersUpdateWithoutNotificationPreferenceInputSchema';
import { ProjectUsersUncheckedUpdateWithoutNotificationPreferenceInputSchema } from './ProjectUsersUncheckedUpdateWithoutNotificationPreferenceInputSchema';

export const ProjectUsersUpdateOneRequiredWithoutNotificationPreferenceNestedInputSchema: z.ZodType<Prisma.ProjectUsersUpdateOneRequiredWithoutNotificationPreferenceNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectUsersCreateWithoutNotificationPreferenceInputSchema),z.lazy(() => ProjectUsersUncheckedCreateWithoutNotificationPreferenceInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectUsersCreateOrConnectWithoutNotificationPreferenceInputSchema).optional(),
  upsert: z.lazy(() => ProjectUsersUpsertWithoutNotificationPreferenceInputSchema).optional(),
  connect: z.lazy(() => ProjectUsersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectUsersUpdateToOneWithWhereWithoutNotificationPreferenceInputSchema),z.lazy(() => ProjectUsersUpdateWithoutNotificationPreferenceInputSchema),z.lazy(() => ProjectUsersUncheckedUpdateWithoutNotificationPreferenceInputSchema) ]).optional(),
}).strict();

export default ProjectUsersUpdateOneRequiredWithoutNotificationPreferenceNestedInputSchema;
