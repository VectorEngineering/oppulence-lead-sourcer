import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumProgramTypeFilterSchema } from './EnumProgramTypeFilterSchema';
import { ProgramTypeSchema } from './ProgramTypeSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { EnumCommissionTypeFilterSchema } from './EnumCommissionTypeFilterSchema';
import { CommissionTypeSchema } from './CommissionTypeSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { EnumCommissionIntervalNullableFilterSchema } from './EnumCommissionIntervalNullableFilterSchema';
import { CommissionIntervalSchema } from './CommissionIntervalSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const ProgramScalarWhereInputSchema: z.ZodType<Prisma.ProgramScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProgramScalarWhereInputSchema),z.lazy(() => ProgramScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProgramScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProgramScalarWhereInputSchema),z.lazy(() => ProgramScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  workspaceId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  logo: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  wordmark: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  brandColor: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  domain: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  url: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => EnumProgramTypeFilterSchema),z.lazy(() => ProgramTypeSchema) ]).optional(),
  cookieLength: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  commissionAmount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  commissionType: z.union([ z.lazy(() => EnumCommissionTypeFilterSchema),z.lazy(() => CommissionTypeSchema) ]).optional(),
  commissionDuration: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  commissionInterval: z.union([ z.lazy(() => EnumCommissionIntervalNullableFilterSchema),z.lazy(() => CommissionIntervalSchema) ]).optional().nullable(),
  landerData: z.lazy(() => JsonNullableFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default ProgramScalarWhereInputSchema;
