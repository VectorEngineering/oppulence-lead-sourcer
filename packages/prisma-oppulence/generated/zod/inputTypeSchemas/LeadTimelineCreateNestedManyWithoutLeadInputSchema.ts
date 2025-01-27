import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadTimelineCreateWithoutLeadInputSchema } from './LeadTimelineCreateWithoutLeadInputSchema';
import { LeadTimelineUncheckedCreateWithoutLeadInputSchema } from './LeadTimelineUncheckedCreateWithoutLeadInputSchema';
import { LeadTimelineCreateOrConnectWithoutLeadInputSchema } from './LeadTimelineCreateOrConnectWithoutLeadInputSchema';
import { LeadTimelineCreateManyLeadInputEnvelopeSchema } from './LeadTimelineCreateManyLeadInputEnvelopeSchema';
import { LeadTimelineWhereUniqueInputSchema } from './LeadTimelineWhereUniqueInputSchema';

export const LeadTimelineCreateNestedManyWithoutLeadInputSchema: z.ZodType<Prisma.LeadTimelineCreateNestedManyWithoutLeadInput> = z.object({
  create: z.union([ z.lazy(() => LeadTimelineCreateWithoutLeadInputSchema),z.lazy(() => LeadTimelineCreateWithoutLeadInputSchema).array(),z.lazy(() => LeadTimelineUncheckedCreateWithoutLeadInputSchema),z.lazy(() => LeadTimelineUncheckedCreateWithoutLeadInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LeadTimelineCreateOrConnectWithoutLeadInputSchema),z.lazy(() => LeadTimelineCreateOrConnectWithoutLeadInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LeadTimelineCreateManyLeadInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LeadTimelineWhereUniqueInputSchema),z.lazy(() => LeadTimelineWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default LeadTimelineCreateNestedManyWithoutLeadInputSchema;
