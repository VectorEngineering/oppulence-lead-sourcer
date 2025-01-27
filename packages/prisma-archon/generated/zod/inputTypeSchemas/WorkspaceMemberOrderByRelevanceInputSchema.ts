import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceMemberOrderByRelevanceFieldEnumSchema } from './WorkspaceMemberOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const WorkspaceMemberOrderByRelevanceInputSchema: z.ZodType<Prisma.WorkspaceMemberOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => WorkspaceMemberOrderByRelevanceFieldEnumSchema),z.lazy(() => WorkspaceMemberOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default WorkspaceMemberOrderByRelevanceInputSchema;
