import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { LeadSegmentationOrderByWithRelationInputSchema } from './LeadSegmentationOrderByWithRelationInputSchema';
import { LeadSegmentationHistoryOrderByRelevanceInputSchema } from './LeadSegmentationHistoryOrderByRelevanceInputSchema';

export const LeadSegmentationHistoryOrderByWithRelationInputSchema: z.ZodType<Prisma.LeadSegmentationHistoryOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  segmentationId: z.lazy(() => SortOrderSchema).optional(),
  previousSegments: z.lazy(() => SortOrderSchema).optional(),
  newSegments: z.lazy(() => SortOrderSchema).optional(),
  reason: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  segmentation: z.lazy(() => LeadSegmentationOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => LeadSegmentationHistoryOrderByRelevanceInputSchema).optional()
}).strict();

export default LeadSegmentationHistoryOrderByWithRelationInputSchema;
