import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';
import { EnumProgramEnrollmentStatusWithAggregatesFilterSchema } from './EnumProgramEnrollmentStatusWithAggregatesFilterSchema';
import { ProgramEnrollmentStatusSchema } from './ProgramEnrollmentStatusSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const ProgramEnrollmentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProgramEnrollmentScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ProgramEnrollmentScalarWhereWithAggregatesInputSchema),z.lazy(() => ProgramEnrollmentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProgramEnrollmentScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProgramEnrollmentScalarWhereWithAggregatesInputSchema),z.lazy(() => ProgramEnrollmentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  partnerId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  programId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  linkId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  commissionAmount: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  discountId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  applicationId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => EnumProgramEnrollmentStatusWithAggregatesFilterSchema),z.lazy(() => ProgramEnrollmentStatusSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default ProgramEnrollmentScalarWhereWithAggregatesInputSchema;
