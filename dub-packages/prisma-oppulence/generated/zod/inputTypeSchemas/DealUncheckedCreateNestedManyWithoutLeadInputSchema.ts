import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealCreateWithoutLeadInputSchema } from './DealCreateWithoutLeadInputSchema';
import { DealUncheckedCreateWithoutLeadInputSchema } from './DealUncheckedCreateWithoutLeadInputSchema';
import { DealCreateOrConnectWithoutLeadInputSchema } from './DealCreateOrConnectWithoutLeadInputSchema';
import { DealCreateManyLeadInputEnvelopeSchema } from './DealCreateManyLeadInputEnvelopeSchema';
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema';

export const DealUncheckedCreateNestedManyWithoutLeadInputSchema: z.ZodType<Prisma.DealUncheckedCreateNestedManyWithoutLeadInput> = z.object({
  create: z.union([ z.lazy(() => DealCreateWithoutLeadInputSchema),z.lazy(() => DealCreateWithoutLeadInputSchema).array(),z.lazy(() => DealUncheckedCreateWithoutLeadInputSchema),z.lazy(() => DealUncheckedCreateWithoutLeadInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DealCreateOrConnectWithoutLeadInputSchema),z.lazy(() => DealCreateOrConnectWithoutLeadInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DealCreateManyLeadInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DealWhereUniqueInputSchema),z.lazy(() => DealWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default DealUncheckedCreateNestedManyWithoutLeadInputSchema;
