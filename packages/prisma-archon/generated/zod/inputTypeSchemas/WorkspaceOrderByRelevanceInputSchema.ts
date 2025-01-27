import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceOrderByRelevanceFieldEnumSchema } from './WorkspaceOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const WorkspaceOrderByRelevanceInputSchema: z.ZodType<Prisma.WorkspaceOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => WorkspaceOrderByRelevanceFieldEnumSchema),z.lazy(() => WorkspaceOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default WorkspaceOrderByRelevanceInputSchema;
