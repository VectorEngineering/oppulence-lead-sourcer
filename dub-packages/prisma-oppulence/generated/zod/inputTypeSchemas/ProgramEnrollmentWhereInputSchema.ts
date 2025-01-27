import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { EnumProgramEnrollmentStatusFilterSchema } from './EnumProgramEnrollmentStatusFilterSchema';
import { ProgramEnrollmentStatusSchema } from './ProgramEnrollmentStatusSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { PartnerRelationFilterSchema } from './PartnerRelationFilterSchema';
import { PartnerWhereInputSchema } from './PartnerWhereInputSchema';
import { ProgramRelationFilterSchema } from './ProgramRelationFilterSchema';
import { ProgramWhereInputSchema } from './ProgramWhereInputSchema';
import { LinkNullableRelationFilterSchema } from './LinkNullableRelationFilterSchema';
import { LinkWhereInputSchema } from './LinkWhereInputSchema';
import { DiscountNullableRelationFilterSchema } from './DiscountNullableRelationFilterSchema';
import { DiscountWhereInputSchema } from './DiscountWhereInputSchema';
import { ProgramApplicationNullableRelationFilterSchema } from './ProgramApplicationNullableRelationFilterSchema';
import { ProgramApplicationWhereInputSchema } from './ProgramApplicationWhereInputSchema';

export const ProgramEnrollmentWhereInputSchema: z.ZodType<Prisma.ProgramEnrollmentWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProgramEnrollmentWhereInputSchema),z.lazy(() => ProgramEnrollmentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProgramEnrollmentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProgramEnrollmentWhereInputSchema),z.lazy(() => ProgramEnrollmentWhereInputSchema).array() ]).optional(),
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
  partner: z.union([ z.lazy(() => PartnerRelationFilterSchema),z.lazy(() => PartnerWhereInputSchema) ]).optional(),
  program: z.union([ z.lazy(() => ProgramRelationFilterSchema),z.lazy(() => ProgramWhereInputSchema) ]).optional(),
  link: z.union([ z.lazy(() => LinkNullableRelationFilterSchema),z.lazy(() => LinkWhereInputSchema) ]).optional().nullable(),
  discount: z.union([ z.lazy(() => DiscountNullableRelationFilterSchema),z.lazy(() => DiscountWhereInputSchema) ]).optional().nullable(),
  application: z.union([ z.lazy(() => ProgramApplicationNullableRelationFilterSchema),z.lazy(() => ProgramApplicationWhereInputSchema) ]).optional().nullable(),
}).strict();

export default ProgramEnrollmentWhereInputSchema;
