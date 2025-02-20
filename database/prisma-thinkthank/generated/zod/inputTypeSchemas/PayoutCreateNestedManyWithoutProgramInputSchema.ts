import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PayoutCreateWithoutProgramInputSchema } from './PayoutCreateWithoutProgramInputSchema';
import { PayoutUncheckedCreateWithoutProgramInputSchema } from './PayoutUncheckedCreateWithoutProgramInputSchema';
import { PayoutCreateOrConnectWithoutProgramInputSchema } from './PayoutCreateOrConnectWithoutProgramInputSchema';
import { PayoutCreateManyProgramInputEnvelopeSchema } from './PayoutCreateManyProgramInputEnvelopeSchema';
import { PayoutWhereUniqueInputSchema } from './PayoutWhereUniqueInputSchema';

export const PayoutCreateNestedManyWithoutProgramInputSchema: z.ZodType<Prisma.PayoutCreateNestedManyWithoutProgramInput> = z.object({
  create: z.union([ z.lazy(() => PayoutCreateWithoutProgramInputSchema),z.lazy(() => PayoutCreateWithoutProgramInputSchema).array(),z.lazy(() => PayoutUncheckedCreateWithoutProgramInputSchema),z.lazy(() => PayoutUncheckedCreateWithoutProgramInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PayoutCreateOrConnectWithoutProgramInputSchema),z.lazy(() => PayoutCreateOrConnectWithoutProgramInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PayoutCreateManyProgramInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PayoutWhereUniqueInputSchema),z.lazy(() => PayoutWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PayoutCreateNestedManyWithoutProgramInputSchema;
