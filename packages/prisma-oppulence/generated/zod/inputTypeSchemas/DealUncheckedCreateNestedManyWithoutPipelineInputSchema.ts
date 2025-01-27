import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealCreateWithoutPipelineInputSchema } from './DealCreateWithoutPipelineInputSchema';
import { DealUncheckedCreateWithoutPipelineInputSchema } from './DealUncheckedCreateWithoutPipelineInputSchema';
import { DealCreateOrConnectWithoutPipelineInputSchema } from './DealCreateOrConnectWithoutPipelineInputSchema';
import { DealCreateManyPipelineInputEnvelopeSchema } from './DealCreateManyPipelineInputEnvelopeSchema';
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema';

export const DealUncheckedCreateNestedManyWithoutPipelineInputSchema: z.ZodType<Prisma.DealUncheckedCreateNestedManyWithoutPipelineInput> = z.object({
  create: z.union([ z.lazy(() => DealCreateWithoutPipelineInputSchema),z.lazy(() => DealCreateWithoutPipelineInputSchema).array(),z.lazy(() => DealUncheckedCreateWithoutPipelineInputSchema),z.lazy(() => DealUncheckedCreateWithoutPipelineInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DealCreateOrConnectWithoutPipelineInputSchema),z.lazy(() => DealCreateOrConnectWithoutPipelineInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DealCreateManyPipelineInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DealWhereUniqueInputSchema),z.lazy(() => DealWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default DealUncheckedCreateNestedManyWithoutPipelineInputSchema;
