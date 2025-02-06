import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectInviteOrderByRelevanceFieldEnumSchema } from './ProjectInviteOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const ProjectInviteOrderByRelevanceInputSchema: z.ZodType<Prisma.ProjectInviteOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => ProjectInviteOrderByRelevanceFieldEnumSchema),z.lazy(() => ProjectInviteOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default ProjectInviteOrderByRelevanceInputSchema;
