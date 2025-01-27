import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealCreateWithoutProjectInputSchema } from './DealCreateWithoutProjectInputSchema';
import { DealUncheckedCreateWithoutProjectInputSchema } from './DealUncheckedCreateWithoutProjectInputSchema';
import { DealCreateOrConnectWithoutProjectInputSchema } from './DealCreateOrConnectWithoutProjectInputSchema';
import { DealCreateManyProjectInputEnvelopeSchema } from './DealCreateManyProjectInputEnvelopeSchema';
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema';

export const DealUncheckedCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.DealUncheckedCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => DealCreateWithoutProjectInputSchema),z.lazy(() => DealCreateWithoutProjectInputSchema).array(),z.lazy(() => DealUncheckedCreateWithoutProjectInputSchema),z.lazy(() => DealUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DealCreateOrConnectWithoutProjectInputSchema),z.lazy(() => DealCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DealCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DealWhereUniqueInputSchema),z.lazy(() => DealWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default DealUncheckedCreateNestedManyWithoutProjectInputSchema;
