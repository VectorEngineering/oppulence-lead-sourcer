import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolNullableFilterSchema } from './BoolNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { EnumPlanNullableFilterSchema } from './EnumPlanNullableFilterSchema';
import { PlanSchema } from './PlanSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { WorkspaceListRelationFilterSchema } from './WorkspaceListRelationFilterSchema';
import { WorkspaceMemberListRelationFilterSchema } from './WorkspaceMemberListRelationFilterSchema';
import { EndpointListRelationFilterSchema } from './EndpointListRelationFilterSchema';

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  firstName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  lastName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  imageUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  username: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  profileImageUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  hasImage: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  lastSignInAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  lastActiveAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  banned: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  passwordEnabled: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  twoFactorEnabled: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  publicMetadata: z.lazy(() => JsonNullableFilterSchema).optional(),
  privateMetadata: z.lazy(() => JsonNullableFilterSchema).optional(),
  unsafeMetadata: z.lazy(() => JsonNullableFilterSchema).optional(),
  emailVerified: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  leadCount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  plan: z.union([ z.lazy(() => EnumPlanNullableFilterSchema),z.lazy(() => PlanSchema) ]).optional().nullable(),
  stripeCustomerId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  onboardingComplete: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  companyName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  role: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  useCase: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  workspaces: z.lazy(() => WorkspaceListRelationFilterSchema).optional(),
  workspaceMembers: z.lazy(() => WorkspaceMemberListRelationFilterSchema).optional(),
  endpoints: z.lazy(() => EndpointListRelationFilterSchema).optional()
}).strict();

export default UserWhereInputSchema;
