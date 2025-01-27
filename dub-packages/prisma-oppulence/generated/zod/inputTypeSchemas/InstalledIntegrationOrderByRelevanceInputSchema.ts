import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InstalledIntegrationOrderByRelevanceFieldEnumSchema } from './InstalledIntegrationOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const InstalledIntegrationOrderByRelevanceInputSchema: z.ZodType<Prisma.InstalledIntegrationOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => InstalledIntegrationOrderByRelevanceFieldEnumSchema),z.lazy(() => InstalledIntegrationOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default InstalledIntegrationOrderByRelevanceInputSchema;
