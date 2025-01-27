import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PartnerInviteScalarWhereInputSchema } from './PartnerInviteScalarWhereInputSchema';
import { PartnerInviteUpdateManyMutationInputSchema } from './PartnerInviteUpdateManyMutationInputSchema';
import { PartnerInviteUncheckedUpdateManyWithoutPartnerInputSchema } from './PartnerInviteUncheckedUpdateManyWithoutPartnerInputSchema';

export const PartnerInviteUpdateManyWithWhereWithoutPartnerInputSchema: z.ZodType<Prisma.PartnerInviteUpdateManyWithWhereWithoutPartnerInput> = z.object({
  where: z.lazy(() => PartnerInviteScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PartnerInviteUpdateManyMutationInputSchema),z.lazy(() => PartnerInviteUncheckedUpdateManyWithoutPartnerInputSchema) ]),
}).strict();

export default PartnerInviteUpdateManyWithWhereWithoutPartnerInputSchema;
