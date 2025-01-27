import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DiscountCreateWithoutProgramInputSchema } from './DiscountCreateWithoutProgramInputSchema';
import { DiscountUncheckedCreateWithoutProgramInputSchema } from './DiscountUncheckedCreateWithoutProgramInputSchema';
import { DiscountCreateOrConnectWithoutProgramInputSchema } from './DiscountCreateOrConnectWithoutProgramInputSchema';
import { DiscountUpsertWithWhereUniqueWithoutProgramInputSchema } from './DiscountUpsertWithWhereUniqueWithoutProgramInputSchema';
import { DiscountCreateManyProgramInputEnvelopeSchema } from './DiscountCreateManyProgramInputEnvelopeSchema';
import { DiscountWhereUniqueInputSchema } from './DiscountWhereUniqueInputSchema';
import { DiscountUpdateWithWhereUniqueWithoutProgramInputSchema } from './DiscountUpdateWithWhereUniqueWithoutProgramInputSchema';
import { DiscountUpdateManyWithWhereWithoutProgramInputSchema } from './DiscountUpdateManyWithWhereWithoutProgramInputSchema';
import { DiscountScalarWhereInputSchema } from './DiscountScalarWhereInputSchema';

export const DiscountUncheckedUpdateManyWithoutProgramNestedInputSchema: z.ZodType<Prisma.DiscountUncheckedUpdateManyWithoutProgramNestedInput> = z.object({
  create: z.union([ z.lazy(() => DiscountCreateWithoutProgramInputSchema),z.lazy(() => DiscountCreateWithoutProgramInputSchema).array(),z.lazy(() => DiscountUncheckedCreateWithoutProgramInputSchema),z.lazy(() => DiscountUncheckedCreateWithoutProgramInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DiscountCreateOrConnectWithoutProgramInputSchema),z.lazy(() => DiscountCreateOrConnectWithoutProgramInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DiscountUpsertWithWhereUniqueWithoutProgramInputSchema),z.lazy(() => DiscountUpsertWithWhereUniqueWithoutProgramInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DiscountCreateManyProgramInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => DiscountWhereUniqueInputSchema),z.lazy(() => DiscountWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DiscountWhereUniqueInputSchema),z.lazy(() => DiscountWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DiscountWhereUniqueInputSchema),z.lazy(() => DiscountWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DiscountWhereUniqueInputSchema),z.lazy(() => DiscountWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DiscountUpdateWithWhereUniqueWithoutProgramInputSchema),z.lazy(() => DiscountUpdateWithWhereUniqueWithoutProgramInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DiscountUpdateManyWithWhereWithoutProgramInputSchema),z.lazy(() => DiscountUpdateManyWithWhereWithoutProgramInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DiscountScalarWhereInputSchema),z.lazy(() => DiscountScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default DiscountUncheckedUpdateManyWithoutProgramNestedInputSchema;
