import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PayoutWhereUniqueInputSchema } from './PayoutWhereUniqueInputSchema';
import { PayoutCreateWithoutPartnerInputSchema } from './PayoutCreateWithoutPartnerInputSchema';
import { PayoutUncheckedCreateWithoutPartnerInputSchema } from './PayoutUncheckedCreateWithoutPartnerInputSchema';

export const PayoutCreateOrConnectWithoutPartnerInputSchema: z.ZodType<Prisma.PayoutCreateOrConnectWithoutPartnerInput> = z.object({
  where: z.lazy(() => PayoutWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PayoutCreateWithoutPartnerInputSchema),z.lazy(() => PayoutUncheckedCreateWithoutPartnerInputSchema) ]),
}).strict();

export default PayoutCreateOrConnectWithoutPartnerInputSchema;
