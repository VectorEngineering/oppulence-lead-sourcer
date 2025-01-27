import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PartnerInviteWhereUniqueInputSchema } from './PartnerInviteWhereUniqueInputSchema';
import { PartnerInviteUpdateWithoutPartnerInputSchema } from './PartnerInviteUpdateWithoutPartnerInputSchema';
import { PartnerInviteUncheckedUpdateWithoutPartnerInputSchema } from './PartnerInviteUncheckedUpdateWithoutPartnerInputSchema';
import { PartnerInviteCreateWithoutPartnerInputSchema } from './PartnerInviteCreateWithoutPartnerInputSchema';
import { PartnerInviteUncheckedCreateWithoutPartnerInputSchema } from './PartnerInviteUncheckedCreateWithoutPartnerInputSchema';

export const PartnerInviteUpsertWithWhereUniqueWithoutPartnerInputSchema: z.ZodType<Prisma.PartnerInviteUpsertWithWhereUniqueWithoutPartnerInput> = z.object({
  where: z.lazy(() => PartnerInviteWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PartnerInviteUpdateWithoutPartnerInputSchema),z.lazy(() => PartnerInviteUncheckedUpdateWithoutPartnerInputSchema) ]),
  create: z.union([ z.lazy(() => PartnerInviteCreateWithoutPartnerInputSchema),z.lazy(() => PartnerInviteUncheckedCreateWithoutPartnerInputSchema) ]),
}).strict();

export default PartnerInviteUpsertWithWhereUniqueWithoutPartnerInputSchema;
