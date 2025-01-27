import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const IntegrationScalarWhereInputSchema: z.ZodType<Prisma.IntegrationScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => IntegrationScalarWhereInputSchema),z.lazy(() => IntegrationScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => IntegrationScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IntegrationScalarWhereInputSchema),z.lazy(() => IntegrationScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  projectId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  readme: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  developer: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  website: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  logo: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  screenshots: z.lazy(() => JsonNullableFilterSchema).optional(),
  verified: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  installUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default IntegrationScalarWhereInputSchema;
