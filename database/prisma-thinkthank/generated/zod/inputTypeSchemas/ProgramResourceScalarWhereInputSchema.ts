import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumProgramResourceTypeFilterSchema } from './EnumProgramResourceTypeFilterSchema';
import { ProgramResourceTypeSchema } from './ProgramResourceTypeSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const ProgramResourceScalarWhereInputSchema: z.ZodType<Prisma.ProgramResourceScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProgramResourceScalarWhereInputSchema),z.lazy(() => ProgramResourceScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProgramResourceScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProgramResourceScalarWhereInputSchema),z.lazy(() => ProgramResourceScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  programId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumProgramResourceTypeFilterSchema),z.lazy(() => ProgramResourceTypeSchema) ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  size: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default ProgramResourceScalarWhereInputSchema;
