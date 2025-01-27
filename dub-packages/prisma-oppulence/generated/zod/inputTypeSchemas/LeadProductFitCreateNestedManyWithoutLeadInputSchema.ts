import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadProductFitCreateWithoutLeadInputSchema } from './LeadProductFitCreateWithoutLeadInputSchema';
import { LeadProductFitUncheckedCreateWithoutLeadInputSchema } from './LeadProductFitUncheckedCreateWithoutLeadInputSchema';
import { LeadProductFitCreateOrConnectWithoutLeadInputSchema } from './LeadProductFitCreateOrConnectWithoutLeadInputSchema';
import { LeadProductFitCreateManyLeadInputEnvelopeSchema } from './LeadProductFitCreateManyLeadInputEnvelopeSchema';
import { LeadProductFitWhereUniqueInputSchema } from './LeadProductFitWhereUniqueInputSchema';

export const LeadProductFitCreateNestedManyWithoutLeadInputSchema: z.ZodType<Prisma.LeadProductFitCreateNestedManyWithoutLeadInput> = z.object({
  create: z.union([ z.lazy(() => LeadProductFitCreateWithoutLeadInputSchema),z.lazy(() => LeadProductFitCreateWithoutLeadInputSchema).array(),z.lazy(() => LeadProductFitUncheckedCreateWithoutLeadInputSchema),z.lazy(() => LeadProductFitUncheckedCreateWithoutLeadInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LeadProductFitCreateOrConnectWithoutLeadInputSchema),z.lazy(() => LeadProductFitCreateOrConnectWithoutLeadInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LeadProductFitCreateManyLeadInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LeadProductFitWhereUniqueInputSchema),z.lazy(() => LeadProductFitWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default LeadProductFitCreateNestedManyWithoutLeadInputSchema;
