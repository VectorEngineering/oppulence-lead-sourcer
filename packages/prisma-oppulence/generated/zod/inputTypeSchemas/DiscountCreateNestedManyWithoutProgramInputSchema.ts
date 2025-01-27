import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DiscountCreateWithoutProgramInputSchema } from './DiscountCreateWithoutProgramInputSchema';
import { DiscountUncheckedCreateWithoutProgramInputSchema } from './DiscountUncheckedCreateWithoutProgramInputSchema';
import { DiscountCreateOrConnectWithoutProgramInputSchema } from './DiscountCreateOrConnectWithoutProgramInputSchema';
import { DiscountCreateManyProgramInputEnvelopeSchema } from './DiscountCreateManyProgramInputEnvelopeSchema';
import { DiscountWhereUniqueInputSchema } from './DiscountWhereUniqueInputSchema';

export const DiscountCreateNestedManyWithoutProgramInputSchema: z.ZodType<Prisma.DiscountCreateNestedManyWithoutProgramInput> = z.object({
  create: z.union([ z.lazy(() => DiscountCreateWithoutProgramInputSchema),z.lazy(() => DiscountCreateWithoutProgramInputSchema).array(),z.lazy(() => DiscountUncheckedCreateWithoutProgramInputSchema),z.lazy(() => DiscountUncheckedCreateWithoutProgramInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DiscountCreateOrConnectWithoutProgramInputSchema),z.lazy(() => DiscountCreateOrConnectWithoutProgramInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DiscountCreateManyProgramInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DiscountWhereUniqueInputSchema),z.lazy(() => DiscountWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default DiscountCreateNestedManyWithoutProgramInputSchema;
