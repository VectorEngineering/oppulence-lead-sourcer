import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { EnumPartnerRoleWithAggregatesFilterSchema } from './EnumPartnerRoleWithAggregatesFilterSchema';
import { PartnerRoleSchema } from './PartnerRoleSchema';

export const PartnerInviteScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PartnerInviteScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PartnerInviteScalarWhereWithAggregatesInputSchema),z.lazy(() => PartnerInviteScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PartnerInviteScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PartnerInviteScalarWhereWithAggregatesInputSchema),z.lazy(() => PartnerInviteScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  partnerId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => EnumPartnerRoleWithAggregatesFilterSchema),z.lazy(() => PartnerRoleSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default PartnerInviteScalarWhereWithAggregatesInputSchema;
