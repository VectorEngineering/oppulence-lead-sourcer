import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const ExchangeRateScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ExchangeRateScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ExchangeRateScalarWhereWithAggregatesInputSchema),z.lazy(() => ExchangeRateScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ExchangeRateScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ExchangeRateScalarWhereWithAggregatesInputSchema),z.lazy(() => ExchangeRateScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  baseCurrency: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  targetCurrency: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  rate: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default ExchangeRateScalarWhereWithAggregatesInputSchema;
