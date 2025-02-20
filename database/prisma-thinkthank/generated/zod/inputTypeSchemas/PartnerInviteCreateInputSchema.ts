import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PartnerRoleSchema } from './PartnerRoleSchema';
import { PartnerCreateNestedOneWithoutInvitesInputSchema } from './PartnerCreateNestedOneWithoutInvitesInputSchema';

export const PartnerInviteCreateInputSchema: z.ZodType<Prisma.PartnerInviteCreateInput> = z.object({
  email: z.string(),
  expires: z.coerce.date(),
  role: z.lazy(() => PartnerRoleSchema).optional(),
  createdAt: z.coerce.date().optional(),
  partner: z.lazy(() => PartnerCreateNestedOneWithoutInvitesInputSchema)
}).strict();

export default PartnerInviteCreateInputSchema;
