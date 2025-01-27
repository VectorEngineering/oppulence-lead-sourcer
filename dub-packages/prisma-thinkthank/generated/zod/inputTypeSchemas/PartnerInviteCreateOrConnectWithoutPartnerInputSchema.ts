import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PartnerInviteWhereUniqueInputSchema } from './PartnerInviteWhereUniqueInputSchema';
import { PartnerInviteCreateWithoutPartnerInputSchema } from './PartnerInviteCreateWithoutPartnerInputSchema';
import { PartnerInviteUncheckedCreateWithoutPartnerInputSchema } from './PartnerInviteUncheckedCreateWithoutPartnerInputSchema';

export const PartnerInviteCreateOrConnectWithoutPartnerInputSchema: z.ZodType<Prisma.PartnerInviteCreateOrConnectWithoutPartnerInput> = z.object({
  where: z.lazy(() => PartnerInviteWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PartnerInviteCreateWithoutPartnerInputSchema),z.lazy(() => PartnerInviteUncheckedCreateWithoutPartnerInputSchema) ]),
}).strict();

export default PartnerInviteCreateOrConnectWithoutPartnerInputSchema;
