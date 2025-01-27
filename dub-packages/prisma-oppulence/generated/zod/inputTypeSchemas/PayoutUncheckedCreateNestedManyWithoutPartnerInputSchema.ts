import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PayoutCreateWithoutPartnerInputSchema } from './PayoutCreateWithoutPartnerInputSchema';
import { PayoutUncheckedCreateWithoutPartnerInputSchema } from './PayoutUncheckedCreateWithoutPartnerInputSchema';
import { PayoutCreateOrConnectWithoutPartnerInputSchema } from './PayoutCreateOrConnectWithoutPartnerInputSchema';
import { PayoutCreateManyPartnerInputEnvelopeSchema } from './PayoutCreateManyPartnerInputEnvelopeSchema';
import { PayoutWhereUniqueInputSchema } from './PayoutWhereUniqueInputSchema';

export const PayoutUncheckedCreateNestedManyWithoutPartnerInputSchema: z.ZodType<Prisma.PayoutUncheckedCreateNestedManyWithoutPartnerInput> = z.object({
  create: z.union([ z.lazy(() => PayoutCreateWithoutPartnerInputSchema),z.lazy(() => PayoutCreateWithoutPartnerInputSchema).array(),z.lazy(() => PayoutUncheckedCreateWithoutPartnerInputSchema),z.lazy(() => PayoutUncheckedCreateWithoutPartnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PayoutCreateOrConnectWithoutPartnerInputSchema),z.lazy(() => PayoutCreateOrConnectWithoutPartnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PayoutCreateManyPartnerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PayoutWhereUniqueInputSchema),z.lazy(() => PayoutWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PayoutUncheckedCreateNestedManyWithoutPartnerInputSchema;
