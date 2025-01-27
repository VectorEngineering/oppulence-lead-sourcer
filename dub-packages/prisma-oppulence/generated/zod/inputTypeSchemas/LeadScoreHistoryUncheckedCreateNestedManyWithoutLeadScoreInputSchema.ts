import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadScoreHistoryCreateWithoutLeadScoreInputSchema } from './LeadScoreHistoryCreateWithoutLeadScoreInputSchema';
import { LeadScoreHistoryUncheckedCreateWithoutLeadScoreInputSchema } from './LeadScoreHistoryUncheckedCreateWithoutLeadScoreInputSchema';
import { LeadScoreHistoryCreateOrConnectWithoutLeadScoreInputSchema } from './LeadScoreHistoryCreateOrConnectWithoutLeadScoreInputSchema';
import { LeadScoreHistoryCreateManyLeadScoreInputEnvelopeSchema } from './LeadScoreHistoryCreateManyLeadScoreInputEnvelopeSchema';
import { LeadScoreHistoryWhereUniqueInputSchema } from './LeadScoreHistoryWhereUniqueInputSchema';

export const LeadScoreHistoryUncheckedCreateNestedManyWithoutLeadScoreInputSchema: z.ZodType<Prisma.LeadScoreHistoryUncheckedCreateNestedManyWithoutLeadScoreInput> = z.object({
  create: z.union([ z.lazy(() => LeadScoreHistoryCreateWithoutLeadScoreInputSchema),z.lazy(() => LeadScoreHistoryCreateWithoutLeadScoreInputSchema).array(),z.lazy(() => LeadScoreHistoryUncheckedCreateWithoutLeadScoreInputSchema),z.lazy(() => LeadScoreHistoryUncheckedCreateWithoutLeadScoreInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LeadScoreHistoryCreateOrConnectWithoutLeadScoreInputSchema),z.lazy(() => LeadScoreHistoryCreateOrConnectWithoutLeadScoreInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LeadScoreHistoryCreateManyLeadScoreInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LeadScoreHistoryWhereUniqueInputSchema),z.lazy(() => LeadScoreHistoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default LeadScoreHistoryUncheckedCreateNestedManyWithoutLeadScoreInputSchema;
