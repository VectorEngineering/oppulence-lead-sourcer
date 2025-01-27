import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PartnerRoleSchema } from './PartnerRoleSchema';
import { PartnerCreateNestedOneWithoutUsersInputSchema } from './PartnerCreateNestedOneWithoutUsersInputSchema';

export const PartnerUserCreateWithoutUserInputSchema: z.ZodType<Prisma.PartnerUserCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  role: z.lazy(() => PartnerRoleSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  partner: z.lazy(() => PartnerCreateNestedOneWithoutUsersInputSchema)
}).strict();

export default PartnerUserCreateWithoutUserInputSchema;
