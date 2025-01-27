import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadLabelCreateWithoutLeadInputSchema } from './LeadLabelCreateWithoutLeadInputSchema';
import { LeadLabelUncheckedCreateWithoutLeadInputSchema } from './LeadLabelUncheckedCreateWithoutLeadInputSchema';
import { LeadLabelCreateOrConnectWithoutLeadInputSchema } from './LeadLabelCreateOrConnectWithoutLeadInputSchema';
import { LeadLabelCreateManyLeadInputEnvelopeSchema } from './LeadLabelCreateManyLeadInputEnvelopeSchema';
import { LeadLabelWhereUniqueInputSchema } from './LeadLabelWhereUniqueInputSchema';

export const LeadLabelCreateNestedManyWithoutLeadInputSchema: z.ZodType<Prisma.LeadLabelCreateNestedManyWithoutLeadInput> = z.object({
  create: z.union([ z.lazy(() => LeadLabelCreateWithoutLeadInputSchema),z.lazy(() => LeadLabelCreateWithoutLeadInputSchema).array(),z.lazy(() => LeadLabelUncheckedCreateWithoutLeadInputSchema),z.lazy(() => LeadLabelUncheckedCreateWithoutLeadInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LeadLabelCreateOrConnectWithoutLeadInputSchema),z.lazy(() => LeadLabelCreateOrConnectWithoutLeadInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LeadLabelCreateManyLeadInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LeadLabelWhereUniqueInputSchema),z.lazy(() => LeadLabelWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default LeadLabelCreateNestedManyWithoutLeadInputSchema;
