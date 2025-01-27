import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { EnumProgramResourceTypeWithAggregatesFilterSchema } from './EnumProgramResourceTypeWithAggregatesFilterSchema';
import { ProgramResourceTypeSchema } from './ProgramResourceTypeSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const ProgramResourceScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProgramResourceScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ProgramResourceScalarWhereWithAggregatesInputSchema),z.lazy(() => ProgramResourceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProgramResourceScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProgramResourceScalarWhereWithAggregatesInputSchema),z.lazy(() => ProgramResourceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  programId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumProgramResourceTypeWithAggregatesFilterSchema),z.lazy(() => ProgramResourceTypeSchema) ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  size: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default ProgramResourceScalarWhereWithAggregatesInputSchema;
