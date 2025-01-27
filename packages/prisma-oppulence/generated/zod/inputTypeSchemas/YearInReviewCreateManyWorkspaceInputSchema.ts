import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const YearInReviewCreateManyWorkspaceInputSchema: z.ZodType<Prisma.YearInReviewCreateManyWorkspaceInput> = z.object({
  id: z.string().cuid().optional(),
  year: z.number().int(),
  totalLinks: z.number().int(),
  totalClicks: z.number().int(),
  topLinks: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  topCountries: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  createdAt: z.coerce.date().optional(),
  sentAt: z.coerce.date().optional().nullable()
}).strict();

export default YearInReviewCreateManyWorkspaceInputSchema;
