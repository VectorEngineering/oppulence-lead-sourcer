import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PayoutWhereUniqueInputSchema } from './PayoutWhereUniqueInputSchema';
import { PayoutUpdateWithoutPartnerInputSchema } from './PayoutUpdateWithoutPartnerInputSchema';
import { PayoutUncheckedUpdateWithoutPartnerInputSchema } from './PayoutUncheckedUpdateWithoutPartnerInputSchema';

export const PayoutUpdateWithWhereUniqueWithoutPartnerInputSchema: z.ZodType<Prisma.PayoutUpdateWithWhereUniqueWithoutPartnerInput> = z.object({
  where: z.lazy(() => PayoutWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PayoutUpdateWithoutPartnerInputSchema),z.lazy(() => PayoutUncheckedUpdateWithoutPartnerInputSchema) ]),
}).strict();

export default PayoutUpdateWithWhereUniqueWithoutPartnerInputSchema;
