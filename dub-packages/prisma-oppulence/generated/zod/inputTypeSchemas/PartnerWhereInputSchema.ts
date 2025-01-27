import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumPartnerStatusFilterSchema } from './EnumPartnerStatusFilterSchema';
import { PartnerStatusSchema } from './PartnerStatusSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { ProgramEnrollmentListRelationFilterSchema } from './ProgramEnrollmentListRelationFilterSchema';
import { ProgramApplicationListRelationFilterSchema } from './ProgramApplicationListRelationFilterSchema';
import { PartnerUserListRelationFilterSchema } from './PartnerUserListRelationFilterSchema';
import { PartnerInviteListRelationFilterSchema } from './PartnerInviteListRelationFilterSchema';
import { PayoutListRelationFilterSchema } from './PayoutListRelationFilterSchema';
import { SaleListRelationFilterSchema } from './SaleListRelationFilterSchema';

export const PartnerWhereInputSchema: z.ZodType<Prisma.PartnerWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PartnerWhereInputSchema),z.lazy(() => PartnerWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PartnerWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PartnerWhereInputSchema),z.lazy(() => PartnerWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  bio: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  country: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumPartnerStatusFilterSchema),z.lazy(() => PartnerStatusSchema) ]).optional(),
  stripeConnectId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  payoutsEnabled: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  showOnLeaderboard: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  programs: z.lazy(() => ProgramEnrollmentListRelationFilterSchema).optional(),
  applications: z.lazy(() => ProgramApplicationListRelationFilterSchema).optional(),
  users: z.lazy(() => PartnerUserListRelationFilterSchema).optional(),
  invites: z.lazy(() => PartnerInviteListRelationFilterSchema).optional(),
  payouts: z.lazy(() => PayoutListRelationFilterSchema).optional(),
  sales: z.lazy(() => SaleListRelationFilterSchema).optional()
}).strict();

export default PartnerWhereInputSchema;
