import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { PlanSchema } from './PlanSchema';
import { WorkspaceMemberUncheckedCreateNestedManyWithoutUserInputSchema } from './WorkspaceMemberUncheckedCreateNestedManyWithoutUserInputSchema';
import { EndpointUncheckedCreateNestedManyWithoutUserInputSchema } from './EndpointUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateWithoutWorkspacesInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutWorkspacesInput> = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string().optional().nullable(),
  firstName: z.string().optional().nullable(),
  lastName: z.string().optional().nullable(),
  imageUrl: z.string().optional().nullable(),
  username: z.string().optional().nullable(),
  profileImageUrl: z.string().optional().nullable(),
  hasImage: z.boolean().optional().nullable(),
  lastSignInAt: z.coerce.date().optional().nullable(),
  lastActiveAt: z.coerce.date().optional().nullable(),
  banned: z.boolean().optional(),
  passwordEnabled: z.boolean().optional(),
  twoFactorEnabled: z.boolean().optional(),
  publicMetadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  privateMetadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  unsafeMetadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  emailVerified: z.boolean().optional(),
  leadCount: z.number().int().optional(),
  plan: z.lazy(() => PlanSchema).optional().nullable(),
  stripeCustomerId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  onboardingComplete: z.boolean().optional(),
  companyName: z.string().optional().nullable(),
  role: z.string().optional().nullable(),
  useCase: z.string().optional().nullable(),
  workspaceMembers: z.lazy(() => WorkspaceMemberUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  endpoints: z.lazy(() => EndpointUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutWorkspacesInputSchema;
