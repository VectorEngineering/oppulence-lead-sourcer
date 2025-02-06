import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { YearInReviewWhereInputSchema } from './YearInReviewWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { ProjectRelationFilterSchema } from './ProjectRelationFilterSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';

export const YearInReviewWhereUniqueInputSchema: z.ZodType<Prisma.YearInReviewWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => YearInReviewWhereInputSchema),z.lazy(() => YearInReviewWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => YearInReviewWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => YearInReviewWhereInputSchema),z.lazy(() => YearInReviewWhereInputSchema).array() ]).optional(),
  year: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  totalLinks: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  totalClicks: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  topLinks: z.lazy(() => JsonFilterSchema).optional(),
  topCountries: z.lazy(() => JsonFilterSchema).optional(),
  workspaceId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  sentAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  workspace: z.union([ z.lazy(() => ProjectRelationFilterSchema),z.lazy(() => ProjectWhereInputSchema) ]).optional(),
}).strict());

export default YearInReviewWhereUniqueInputSchema;
