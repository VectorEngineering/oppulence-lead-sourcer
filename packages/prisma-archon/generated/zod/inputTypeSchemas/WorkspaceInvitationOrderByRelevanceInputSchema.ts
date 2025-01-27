import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceInvitationOrderByRelevanceFieldEnumSchema } from './WorkspaceInvitationOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const WorkspaceInvitationOrderByRelevanceInputSchema: z.ZodType<Prisma.WorkspaceInvitationOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => WorkspaceInvitationOrderByRelevanceFieldEnumSchema),z.lazy(() => WorkspaceInvitationOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default WorkspaceInvitationOrderByRelevanceInputSchema;
