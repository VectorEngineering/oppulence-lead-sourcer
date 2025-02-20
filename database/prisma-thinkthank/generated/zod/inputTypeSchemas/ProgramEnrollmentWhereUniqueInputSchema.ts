import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramEnrollmentPartnerIdProgramIdCompoundUniqueInputSchema } from './ProgramEnrollmentPartnerIdProgramIdCompoundUniqueInputSchema';
import { ProgramEnrollmentWhereInputSchema } from './ProgramEnrollmentWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
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

export const ProgramEnrollmentWhereUniqueInputSchema: z.ZodType<Prisma.ProgramEnrollmentWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    linkId: z.string(),
    applicationId: z.string(),
    partnerId_programId: z.lazy(() => ProgramEnrollmentPartnerIdProgramIdCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().cuid(),
    linkId: z.string(),
    applicationId: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
    linkId: z.string(),
    partnerId_programId: z.lazy(() => ProgramEnrollmentPartnerIdProgramIdCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string().cuid(),
    linkId: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
    applicationId: z.string(),
    partnerId_programId: z.lazy(() => ProgramEnrollmentPartnerIdProgramIdCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string().cuid(),
    applicationId: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
    partnerId_programId: z.lazy(() => ProgramEnrollmentPartnerIdProgramIdCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    linkId: z.string(),
    applicationId: z.string(),
    partnerId_programId: z.lazy(() => ProgramEnrollmentPartnerIdProgramIdCompoundUniqueInputSchema),
  }),
  z.object({
    linkId: z.string(),
    applicationId: z.string(),
  }),
  z.object({
    linkId: z.string(),
    partnerId_programId: z.lazy(() => ProgramEnrollmentPartnerIdProgramIdCompoundUniqueInputSchema),
  }),
  z.object({
    linkId: z.string(),
  }),
  z.object({
    applicationId: z.string(),
    partnerId_programId: z.lazy(() => ProgramEnrollmentPartnerIdProgramIdCompoundUniqueInputSchema),
  }),
  z.object({
    applicationId: z.string(),
  }),
  z.object({
    partnerId_programId: z.lazy(() => ProgramEnrollmentPartnerIdProgramIdCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  linkId: z.string().optional(),
  applicationId: z.string().optional(),
  partnerId_programId: z.lazy(() => ProgramEnrollmentPartnerIdProgramIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => ProgramEnrollmentWhereInputSchema),z.lazy(() => ProgramEnrollmentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProgramEnrollmentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProgramEnrollmentWhereInputSchema),z.lazy(() => ProgramEnrollmentWhereInputSchema).array() ]).optional(),
  partnerId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  programId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  commissionAmount: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  discountId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => EnumProgramEnrollmentStatusFilterSchema),z.lazy(() => ProgramEnrollmentStatusSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  partner: z.union([ z.lazy(() => PartnerRelationFilterSchema),z.lazy(() => PartnerWhereInputSchema) ]).optional(),
  program: z.union([ z.lazy(() => ProgramRelationFilterSchema),z.lazy(() => ProgramWhereInputSchema) ]).optional(),
  link: z.union([ z.lazy(() => LinkNullableRelationFilterSchema),z.lazy(() => LinkWhereInputSchema) ]).optional().nullable(),
  discount: z.union([ z.lazy(() => DiscountNullableRelationFilterSchema),z.lazy(() => DiscountWhereInputSchema) ]).optional().nullable(),
  application: z.union([ z.lazy(() => ProgramApplicationNullableRelationFilterSchema),z.lazy(() => ProgramApplicationWhereInputSchema) ]).optional().nullable(),
}).strict());

export default ProgramEnrollmentWhereUniqueInputSchema;
