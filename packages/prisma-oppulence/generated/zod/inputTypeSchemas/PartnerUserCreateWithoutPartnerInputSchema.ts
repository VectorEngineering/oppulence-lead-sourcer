import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PartnerRoleSchema } from './PartnerRoleSchema';
import { UserCreateNestedOneWithoutPartnersInputSchema } from './UserCreateNestedOneWithoutPartnersInputSchema';

export const PartnerUserCreateWithoutPartnerInputSchema: z.ZodType<Prisma.PartnerUserCreateWithoutPartnerInput> = z.object({
  id: z.string().cuid().optional(),
  role: z.lazy(() => PartnerRoleSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutPartnersInputSchema)
}).strict();

export default PartnerUserCreateWithoutPartnerInputSchema;
