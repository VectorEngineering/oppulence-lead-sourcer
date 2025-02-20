import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { RoleSchema } from './RoleSchema';
import { EnumRoleFieldUpdateOperationsInputSchema } from './EnumRoleFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NotificationPreferenceUncheckedUpdateOneWithoutProjectUserNestedInputSchema } from './NotificationPreferenceUncheckedUpdateOneWithoutProjectUserNestedInputSchema';

export const ProjectUsersUncheckedUpdateWithoutProjectInputSchema: z.ZodType<Prisma.ProjectUsersUncheckedUpdateWithoutProjectInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  notificationPreference: z.lazy(() => NotificationPreferenceUncheckedUpdateOneWithoutProjectUserNestedInputSchema).optional()
}).strict();

export default ProjectUsersUncheckedUpdateWithoutProjectInputSchema;
