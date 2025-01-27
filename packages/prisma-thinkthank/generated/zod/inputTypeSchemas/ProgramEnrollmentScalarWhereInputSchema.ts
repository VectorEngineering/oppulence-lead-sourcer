import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { EnumProgramEnrollmentStatusFilterSchema } from './EnumProgramEnrollmentStatusFilterSchema';
import { ProgramEnrollmentStatusSchema } from './ProgramEnrollmentStatusSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const ProgramEnrollmentScalarWhereInputSchema: z.ZodType<Prisma.ProgramEnrollmentScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProgramEnrollmentScalarWhereInputSchema),z.lazy(() => ProgramEnrollmentScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProgramEnrollmentScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProgramEnrollmentScalarWhereInputSchema),z.lazy(() => ProgramEnrollmentScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  partnerId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  programId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  linkId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  commissionAmount: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  discountId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  applicationId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => EnumProgramEnrollmentStatusFilterSchema),z.lazy(() => ProgramEnrollmentStatusSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default ProgramEnrollmentScalarWhereInputSchema;
