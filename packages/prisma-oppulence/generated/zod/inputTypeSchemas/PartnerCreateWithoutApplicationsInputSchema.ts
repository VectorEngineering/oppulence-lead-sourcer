import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PartnerStatusSchema } from './PartnerStatusSchema';
import { ProgramEnrollmentCreateNestedManyWithoutPartnerInputSchema } from './ProgramEnrollmentCreateNestedManyWithoutPartnerInputSchema';
import { PartnerUserCreateNestedManyWithoutPartnerInputSchema } from './PartnerUserCreateNestedManyWithoutPartnerInputSchema';
import { PartnerInviteCreateNestedManyWithoutPartnerInputSchema } from './PartnerInviteCreateNestedManyWithoutPartnerInputSchema';
import { PayoutCreateNestedManyWithoutPartnerInputSchema } from './PayoutCreateNestedManyWithoutPartnerInputSchema';
import { SaleCreateNestedManyWithoutPartnerInputSchema } from './SaleCreateNestedManyWithoutPartnerInputSchema';

export const PartnerCreateWithoutApplicationsInputSchema: z.ZodType<Prisma.PartnerCreateWithoutApplicationsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  email: z.string(),
  image: z.string().optional().nullable(),
  bio: z.string().optional().nullable(),
  country: z.string(),
  status: z.lazy(() => PartnerStatusSchema).optional(),
  stripeConnectId: z.string().optional().nullable(),
  payoutsEnabled: z.boolean().optional(),
  showOnLeaderboard: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  programs: z.lazy(() => ProgramEnrollmentCreateNestedManyWithoutPartnerInputSchema).optional(),
  users: z.lazy(() => PartnerUserCreateNestedManyWithoutPartnerInputSchema).optional(),
  invites: z.lazy(() => PartnerInviteCreateNestedManyWithoutPartnerInputSchema).optional(),
  payouts: z.lazy(() => PayoutCreateNestedManyWithoutPartnerInputSchema).optional(),
  sales: z.lazy(() => SaleCreateNestedManyWithoutPartnerInputSchema).optional()
}).strict();

export default PartnerCreateWithoutApplicationsInputSchema;
