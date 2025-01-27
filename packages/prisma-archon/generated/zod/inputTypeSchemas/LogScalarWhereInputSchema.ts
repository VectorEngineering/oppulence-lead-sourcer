import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumLogTypeNullableFilterSchema } from './EnumLogTypeNullableFilterSchema';
import { LogTypeSchema } from './LogTypeSchema';
import { EnumLogPostTypeNullableFilterSchema } from './EnumLogPostTypeNullableFilterSchema';
import { LogPostTypeSchema } from './LogPostTypeSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const LogScalarWhereInputSchema: z.ZodType<Prisma.LogScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LogScalarWhereInputSchema),z.lazy(() => LogScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LogScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LogScalarWhereInputSchema),z.lazy(() => LogScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  endpointId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumLogTypeNullableFilterSchema),z.lazy(() => LogTypeSchema) ]).optional().nullable(),
  postType: z.union([ z.lazy(() => EnumLogPostTypeNullableFilterSchema),z.lazy(() => LogPostTypeSchema) ]).optional().nullable(),
  message: z.lazy(() => JsonFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default LogScalarWhereInputSchema;
