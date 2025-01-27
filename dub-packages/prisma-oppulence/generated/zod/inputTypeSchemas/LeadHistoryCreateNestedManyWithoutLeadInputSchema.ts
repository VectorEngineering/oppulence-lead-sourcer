import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadHistoryCreateWithoutLeadInputSchema } from './LeadHistoryCreateWithoutLeadInputSchema';
import { LeadHistoryUncheckedCreateWithoutLeadInputSchema } from './LeadHistoryUncheckedCreateWithoutLeadInputSchema';
import { LeadHistoryCreateOrConnectWithoutLeadInputSchema } from './LeadHistoryCreateOrConnectWithoutLeadInputSchema';
import { LeadHistoryCreateManyLeadInputEnvelopeSchema } from './LeadHistoryCreateManyLeadInputEnvelopeSchema';
import { LeadHistoryWhereUniqueInputSchema } from './LeadHistoryWhereUniqueInputSchema';

export const LeadHistoryCreateNestedManyWithoutLeadInputSchema: z.ZodType<Prisma.LeadHistoryCreateNestedManyWithoutLeadInput> = z.object({
  create: z.union([ z.lazy(() => LeadHistoryCreateWithoutLeadInputSchema),z.lazy(() => LeadHistoryCreateWithoutLeadInputSchema).array(),z.lazy(() => LeadHistoryUncheckedCreateWithoutLeadInputSchema),z.lazy(() => LeadHistoryUncheckedCreateWithoutLeadInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LeadHistoryCreateOrConnectWithoutLeadInputSchema),z.lazy(() => LeadHistoryCreateOrConnectWithoutLeadInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LeadHistoryCreateManyLeadInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LeadHistoryWhereUniqueInputSchema),z.lazy(() => LeadHistoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default LeadHistoryCreateNestedManyWithoutLeadInputSchema;
