import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PartnerUserUserIdPartnerIdCompoundUniqueInputSchema } from './PartnerUserUserIdPartnerIdCompoundUniqueInputSchema';
import { PartnerUserWhereInputSchema } from './PartnerUserWhereInputSchema';
import { EnumPartnerRoleFilterSchema } from './EnumPartnerRoleFilterSchema';
import { PartnerRoleSchema } from './PartnerRoleSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { PartnerRelationFilterSchema } from './PartnerRelationFilterSchema';
import { PartnerWhereInputSchema } from './PartnerWhereInputSchema';

export const PartnerUserWhereUniqueInputSchema: z.ZodType<Prisma.PartnerUserWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    userId_partnerId: z.lazy(() => PartnerUserUserIdPartnerIdCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    userId_partnerId: z.lazy(() => PartnerUserUserIdPartnerIdCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  userId_partnerId: z.lazy(() => PartnerUserUserIdPartnerIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => PartnerUserWhereInputSchema),z.lazy(() => PartnerUserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PartnerUserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PartnerUserWhereInputSchema),z.lazy(() => PartnerUserWhereInputSchema).array() ]).optional(),
  role: z.union([ z.lazy(() => EnumPartnerRoleFilterSchema),z.lazy(() => PartnerRoleSchema) ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  partnerId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  partner: z.union([ z.lazy(() => PartnerRelationFilterSchema),z.lazy(() => PartnerWhereInputSchema) ]).optional(),
}).strict());

export default PartnerUserWhereUniqueInputSchema;
