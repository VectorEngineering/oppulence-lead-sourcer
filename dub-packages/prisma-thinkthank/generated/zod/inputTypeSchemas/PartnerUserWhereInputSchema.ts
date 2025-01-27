import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumPartnerRoleFilterSchema } from './EnumPartnerRoleFilterSchema';
import { PartnerRoleSchema } from './PartnerRoleSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { PartnerRelationFilterSchema } from './PartnerRelationFilterSchema';
import { PartnerWhereInputSchema } from './PartnerWhereInputSchema';

export const PartnerUserWhereInputSchema: z.ZodType<Prisma.PartnerUserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PartnerUserWhereInputSchema),z.lazy(() => PartnerUserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PartnerUserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PartnerUserWhereInputSchema),z.lazy(() => PartnerUserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => EnumPartnerRoleFilterSchema),z.lazy(() => PartnerRoleSchema) ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  partnerId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  partner: z.union([ z.lazy(() => PartnerRelationFilterSchema),z.lazy(() => PartnerWhereInputSchema) ]).optional(),
}).strict();

export default PartnerUserWhereInputSchema;
