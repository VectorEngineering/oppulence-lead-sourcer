import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadContactPreferenceCreateWithoutLeadInputSchema } from './LeadContactPreferenceCreateWithoutLeadInputSchema';
import { LeadContactPreferenceUncheckedCreateWithoutLeadInputSchema } from './LeadContactPreferenceUncheckedCreateWithoutLeadInputSchema';
import { LeadContactPreferenceCreateOrConnectWithoutLeadInputSchema } from './LeadContactPreferenceCreateOrConnectWithoutLeadInputSchema';
import { LeadContactPreferenceCreateManyLeadInputEnvelopeSchema } from './LeadContactPreferenceCreateManyLeadInputEnvelopeSchema';
import { LeadContactPreferenceWhereUniqueInputSchema } from './LeadContactPreferenceWhereUniqueInputSchema';

export const LeadContactPreferenceUncheckedCreateNestedManyWithoutLeadInputSchema: z.ZodType<Prisma.LeadContactPreferenceUncheckedCreateNestedManyWithoutLeadInput> = z.object({
  create: z.union([ z.lazy(() => LeadContactPreferenceCreateWithoutLeadInputSchema),z.lazy(() => LeadContactPreferenceCreateWithoutLeadInputSchema).array(),z.lazy(() => LeadContactPreferenceUncheckedCreateWithoutLeadInputSchema),z.lazy(() => LeadContactPreferenceUncheckedCreateWithoutLeadInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LeadContactPreferenceCreateOrConnectWithoutLeadInputSchema),z.lazy(() => LeadContactPreferenceCreateOrConnectWithoutLeadInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LeadContactPreferenceCreateManyLeadInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LeadContactPreferenceWhereUniqueInputSchema),z.lazy(() => LeadContactPreferenceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default LeadContactPreferenceUncheckedCreateNestedManyWithoutLeadInputSchema;
