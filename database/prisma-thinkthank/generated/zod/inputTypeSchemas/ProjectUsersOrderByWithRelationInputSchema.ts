import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';
import { ProjectOrderByWithRelationInputSchema } from './ProjectOrderByWithRelationInputSchema';
import { NotificationPreferenceOrderByWithRelationInputSchema } from './NotificationPreferenceOrderByWithRelationInputSchema';
import { ProjectUsersOrderByRelevanceInputSchema } from './ProjectUsersOrderByRelevanceInputSchema';

export const ProjectUsersOrderByWithRelationInputSchema: z.ZodType<Prisma.ProjectUsersOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional(),
  notificationPreference: z.lazy(() => NotificationPreferenceOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => ProjectUsersOrderByRelevanceInputSchema).optional()
}).strict();

export default ProjectUsersOrderByWithRelationInputSchema;
