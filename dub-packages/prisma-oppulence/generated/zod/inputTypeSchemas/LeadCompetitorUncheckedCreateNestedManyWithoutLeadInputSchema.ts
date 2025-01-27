import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCompetitorCreateWithoutLeadInputSchema } from './LeadCompetitorCreateWithoutLeadInputSchema';
import { LeadCompetitorUncheckedCreateWithoutLeadInputSchema } from './LeadCompetitorUncheckedCreateWithoutLeadInputSchema';
import { LeadCompetitorCreateOrConnectWithoutLeadInputSchema } from './LeadCompetitorCreateOrConnectWithoutLeadInputSchema';
import { LeadCompetitorCreateManyLeadInputEnvelopeSchema } from './LeadCompetitorCreateManyLeadInputEnvelopeSchema';
import { LeadCompetitorWhereUniqueInputSchema } from './LeadCompetitorWhereUniqueInputSchema';

export const LeadCompetitorUncheckedCreateNestedManyWithoutLeadInputSchema: z.ZodType<Prisma.LeadCompetitorUncheckedCreateNestedManyWithoutLeadInput> = z.object({
  create: z.union([ z.lazy(() => LeadCompetitorCreateWithoutLeadInputSchema),z.lazy(() => LeadCompetitorCreateWithoutLeadInputSchema).array(),z.lazy(() => LeadCompetitorUncheckedCreateWithoutLeadInputSchema),z.lazy(() => LeadCompetitorUncheckedCreateWithoutLeadInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LeadCompetitorCreateOrConnectWithoutLeadInputSchema),z.lazy(() => LeadCompetitorCreateOrConnectWithoutLeadInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LeadCompetitorCreateManyLeadInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LeadCompetitorWhereUniqueInputSchema),z.lazy(() => LeadCompetitorWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default LeadCompetitorUncheckedCreateNestedManyWithoutLeadInputSchema;
