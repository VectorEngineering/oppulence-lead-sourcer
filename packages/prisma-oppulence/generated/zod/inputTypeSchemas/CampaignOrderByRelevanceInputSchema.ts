import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CampaignOrderByRelevanceFieldEnumSchema } from './CampaignOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const CampaignOrderByRelevanceInputSchema: z.ZodType<Prisma.CampaignOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => CampaignOrderByRelevanceFieldEnumSchema),z.lazy(() => CampaignOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default CampaignOrderByRelevanceInputSchema;
